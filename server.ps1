param(
  [ValidateSet('start', 'restart', 'stop')]
  [string]$Action = 'start'
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

function Stop-SiteServer {
  Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue |
    ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
}

if ($Action -eq 'stop') {
  Stop-SiteServer
  Write-Host 'AI Workflows local server stopped.'
  exit 0
}

if ($Action -eq 'restart') {
  Stop-SiteServer
  Start-Sleep -Seconds 1
  Write-Host 'Restarting AI Workflows local server...'
}

$server = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, 8000)
$server.Start()
Write-Host 'AI Workflows local server: http://127.0.0.1:8000/'

function Get-ContentType([string]$filePath) {
  switch -Regex ($filePath) {
    '\.html?$' { return 'text/html; charset=utf-8' }
    '\.css$'   { return 'text/css; charset=utf-8' }
    '\.js$'    { return 'application/javascript; charset=utf-8' }
    '\.json$'  { return 'application/json; charset=utf-8' }
    '\.xml$'   { return 'application/xml; charset=utf-8' }
    '\.txt$'   { return 'text/plain; charset=utf-8' }
    '\.jpg$|\.jpeg$' { return 'image/jpeg' }
    '\.png$'   { return 'image/png' }
    '\.svg$'   { return 'image/svg+xml' }
    '\.webp$'  { return 'image/webp' }
    default    { return 'application/octet-stream' }
  }
}

function Resolve-SitePath([string]$path) {
  if ([string]::IsNullOrWhiteSpace($path)) {
    return Join-Path $root 'index.html'
  }

  $path = $path.TrimStart('/').Replace('/', [IO.Path]::DirectorySeparatorChar)
  $candidate = Join-Path $root $path

  if (Test-Path -LiteralPath $candidate -PathType Leaf) {
    return $candidate
  }

  if (Test-Path -LiteralPath $candidate -PathType Container) {
    $index = Join-Path $candidate 'index.html'
    if (Test-Path -LiteralPath $index -PathType Leaf) {
      return $index
    }
  }

  if (-not $path.EndsWith('index.html')) {
    $indexCandidate = Join-Path $candidate 'index.html'
    if (Test-Path -LiteralPath $indexCandidate -PathType Leaf) {
      return $indexCandidate
    }
  }

  return $candidate
}

while ($true) {
  $client = $server.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream)
    $requestLine = $reader.ReadLine()
    while ($reader.ReadLine()) {}

    $path = ""
    if ($requestLine -match '^[A-Z]+\s+([^\s]+)') {
      $path = [uri]::UnescapeDataString($matches[1].Split('?')[0])
    }

    $file = Resolve-SitePath $path
    $resolvedRoot = (Resolve-Path -LiteralPath $root).Path
    $exists = Test-Path -LiteralPath $file -PathType Leaf
    $resolvedFile = if ($exists) { (Resolve-Path -LiteralPath $file).Path } else { '' }

    if ($exists -and $resolvedFile.StartsWith($resolvedRoot)) {
      $body = [System.IO.File]::ReadAllBytes($resolvedFile)
      $type = Get-ContentType $resolvedFile
      $header = "HTTP/1.1 200 OK`r`nContent-Type: $type`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
    } else {
      $body = [Text.Encoding]::UTF8.GetBytes('Not found')
      $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
    }

    $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($body, 0, $body.Length)
  } catch {
    Add-Content -LiteralPath 'C:\tmp\ai-workflows-server-error.log' -Value $_.Exception.ToString()
  } finally {
    $client.Close()
  }
}
