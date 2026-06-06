# Deploy AI Workflows frontend to VPS
# Usage:
#   .\scripts\deploy-to-vps.ps1
#   $env:VPS_SUDO_PASSWORD = 'your-sudo-password'; .\scripts\deploy-to-vps.ps1
#   .\scripts\deploy-to-vps.ps1 -InstallOnly

param(
  [switch]$InstallOnly
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$hostName = "myvps-ashok"
$webRoot = "/var/www/ai-workflows.cloud"
$staging = "~/ai-workflows-deploy"
$files = @(
  "index.html",
  "logo.jpg",
  "privacy.html",
  "robots.txt",
  "sitemap.xml",
  "ads.txt",
  "marketing-config.js",
  "marketing.js",
  "hub-content.js"
)
$folders = @("content", "learn", "images")

if (-not $InstallOnly) {
  Write-Host "Uploading files to VPS staging folder..."
  ssh -i "$env:USERPROFILE\.ssh\id_rsa" $hostName "mkdir -p $staging/content $staging/learn $staging/images/projects"
  foreach ($file in $files) {
    $local = Join-Path $root $file
    if (-not (Test-Path $local)) {
      throw "Missing file: $local"
    }
    scp -i "$env:USERPROFILE\.ssh\id_rsa" $local "${hostName}:${staging}/"
    if ($LASTEXITCODE -ne 0) {
      throw "SCP failed for $file"
    }
    Write-Host "  uploaded $file"
  }
  foreach ($folder in $folders) {
    $localFolder = Join-Path $root $folder
    if (-not (Test-Path $localFolder)) {
      throw "Missing folder: $localFolder"
    }
    scp -i "$env:USERPROFILE\.ssh\id_rsa" -r $localFolder "${hostName}:${staging}/"
    if ($LASTEXITCODE -ne 0) {
      throw "SCP failed for folder $folder"
    }
    Write-Host "  uploaded $folder/"
  }
} else {
  Write-Host "Skipping upload (-InstallOnly). Using files already in $staging ..."
}

Write-Host "Installing files to $webRoot ..."
$sudoPassword = $env:VPS_SUDO_PASSWORD
if (-not $sudoPassword) {
  Write-Host ""
  Write-Host "VPS_SUDO_PASSWORD is not set. Enter your VPS sudo password to copy files into $webRoot :"
  $secure = Read-Host -AsSecureString
  $sudoPassword = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
  )
}
if (-not $sudoPassword) {
  throw "Sudo password required to install files to $webRoot"
}

$escapedPassword = $sudoPassword -replace "'", "'\''"
$remoteScript = @"
set -e
mkdir -p $staging
echo '$escapedPassword' | sudo -S mkdir -p $webRoot
echo '$escapedPassword' | sudo -S cp $staging/index.html $webRoot/index.html
echo '$escapedPassword' | sudo -S cp $staging/logo.jpg $webRoot/logo.jpg
echo '$escapedPassword' | sudo -S cp $staging/privacy.html $webRoot/privacy.html
echo '$escapedPassword' | sudo -S cp $staging/robots.txt $webRoot/robots.txt
echo '$escapedPassword' | sudo -S cp $staging/sitemap.xml $webRoot/sitemap.xml
echo '$escapedPassword' | sudo -S cp $staging/ads.txt $webRoot/ads.txt
echo '$escapedPassword' | sudo -S cp $staging/marketing-config.js $webRoot/marketing-config.js
echo '$escapedPassword' | sudo -S cp $staging/marketing.js $webRoot/marketing.js
echo '$escapedPassword' | sudo -S cp $staging/hub-content.js $webRoot/hub-content.js
echo '$escapedPassword' | sudo -S mkdir -p $webRoot/content $webRoot/learn $webRoot/images/projects
echo '$escapedPassword' | sudo -S cp -r $staging/content/. $webRoot/content/
echo '$escapedPassword' | sudo -S cp -r $staging/learn/. $webRoot/learn/
if [ -d $staging/images ]; then echo '$escapedPassword' | sudo -S cp -r $staging/images/. $webRoot/images/; fi
echo '$escapedPassword' | sudo -S chown -R www-data:www-data $webRoot
echo '$escapedPassword' | sudo -S chmod -R 755 $webRoot
rm -rf $staging
echo DEPLOY_OK
"@

ssh -i "$env:USERPROFILE\.ssh\id_rsa" $hostName $remoteScript
if ($LASTEXITCODE -ne 0) {
  throw "SSH install step failed"
}

Write-Host "Deploy complete: https://ai-workflows.cloud/"
