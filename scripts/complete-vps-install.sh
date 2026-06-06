#!/bin/bash
# Run on the VPS after files are in ~/ai-workflows-deploy/
set -e
STAGING="$HOME/ai-workflows-deploy"
WEB_ROOT="/var/www/ai-workflows.cloud"

sudo mkdir -p "$WEB_ROOT"
sudo cp "$STAGING/index.html" "$WEB_ROOT/index.html"
sudo cp "$STAGING/logo.jpg" "$WEB_ROOT/logo.jpg"
sudo cp "$STAGING/privacy.html" "$WEB_ROOT/privacy.html"
sudo cp "$STAGING/robots.txt" "$WEB_ROOT/robots.txt"
sudo cp "$STAGING/sitemap.xml" "$WEB_ROOT/sitemap.xml"
sudo cp "$STAGING/ads.txt" "$WEB_ROOT/ads.txt"
sudo chown -R www-data:www-data "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"
rm -rf "$STAGING"
echo "DEPLOY_OK — https://ai-workflows.cloud/"
