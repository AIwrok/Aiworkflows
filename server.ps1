$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$server = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, 8000)
$server.Start()

while ($true) {
  $client = $server.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream)
    $requestLine = $reader.ReadLine()
    while ($reader.ReadLine()) {}

    $path = ""
    if ($requestLine -match "^[A-Z]+\s+([^\s]+)") {
      $path = [uri]::UnescapeDataString($matches[1].Split("?")[0].TrimStart("/"))
    }
    if ([string]::IsNullOrWhiteSpace($path)) {
      $path = "index.html"
    }

    $file = Join-Path $root $path
    $resolvedRoot = (Resolve-Path -LiteralPath $root).Path
    $exists = Test-Path -LiteralPath $file -PathType Leaf
    $resolvedFile = if ($exists) { (Resolve-Path -LiteralPath $file).Path } else { "" }

    if ($exists -and $resolvedFile.StartsWith($resolvedRoot)) {
      $body = [System.IO.File]::ReadAllBytes($resolvedFile)
      $type = "application/octet-stream"
      if ($resolvedFile.EndsWith(".html")) { $type = "text/html; charset=utf-8" }
      if ($resolvedFile.EndsWith(".jpg") -or $resolvedFile.EndsWith(".jpeg")) { $type = "image/jpeg" }
      if ($resolvedFile.EndsWith(".png")) { $type = "image/png" }
      $header = "HTTP/1.1 200 OK`r`nContent-Type: $type`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
    } else {
      $body = [Text.Encoding]::UTF8.GetBytes("Not found")
      $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
    }

    $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($body, 0, $body.Length)
  } catch {
    Add-Content -LiteralPath "C:\tmp\ai-workflows-server-error.log" -Value $_.Exception.ToString()
  } finally {
    $client.Close()
  }
}
