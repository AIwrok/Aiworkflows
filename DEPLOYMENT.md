# Deployment Guide — AI Workflows

## VPS Details
- **Server IP:** 147.93.108.231
- **User:** ashok
- **Web Root:** `/var/www/ai-workflows.cloud/`
- **Domain:** https://ai-workflows.cloud

## SSH Access
```bash
ssh ashok@147.93.108.231
# Password: [stored securely]
```

SSH config is saved at `~/.ssh/config` as `myvps-ashok`.

## Deploy Website Files

### Upload HTML
```bash
scp -i ~/.ssh/id_rsa "AI Workflows.html" ashok@147.93.108.231:~/index.html
ssh -i ~/.ssh/id_rsa ashok@147.93.108.231 'echo "PASSWORD" | sudo -S mv ~/index.html /var/www/ai-workflows.cloud/index.html'
```

### Upload Logo
```bash
scp -i ~/.ssh/id_rsa logo.jpg ashok@147.93.108.231:~/logo.jpg
ssh -i ~/.ssh/id_rsa ashok@147.93.108.231 'echo "PASSWORD" | sudo -S mv ~/logo.jpg /var/www/ai-workflows.cloud/logo.jpg'
```

### Set Permissions
```bash
sudo chown -R www-data:www-data /var/www/ai-workflows.cloud/
sudo chmod -R 755 /var/www/ai-workflows.cloud/
```

## Web Server (Nginx)

Config location: `/etc/nginx/sites-available/ai-workflows.cloud`

```nginx
server {
    listen 80;
    server_name ai-workflows.cloud www.ai-workflows.cloud;
    root /var/www/ai-workflows.cloud;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## Files on VPS
| File | Location | Size |
|---|---|---|
| index.html | /var/www/ai-workflows.cloud/index.html | ~74KB |
| logo.jpg | /var/www/ai-workflows.cloud/logo.jpg | ~67KB |

## Local Development
Run a local server from the website folder:
```bash
python3 -m http.server 8000
```
Then open: http://localhost:8000/AI%20Workflows.html
