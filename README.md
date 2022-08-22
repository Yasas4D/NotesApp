# NotesApp
Sample app for demonstrating MERN stack deployment
<hr>

#### Nginx Configs

```bash

server {
        listen 80;
        listen [::]:80;
        root /home/azureuser/apps/my-notes-app/client/build;
        index index.html index.htm index.nginx-debian.html;
        server_name 20.51.228.239;
        location / {
                    try_files $uri /index.html;
                   }
        location /api {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
           }
}
```
#### Usefull Commands

```bash

sudo apt update && sudo apt upgrade -y

sudo apt-get install nginx -y

sudo systemctl enable nginx

sudo systemctl status nginx

sudo ln -s /etc/nginx/sites-available/myserver /etc/nginx/sites-enabled/

sudo service nginx restart

node --version

wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo systemctl start mongod

sudo systemctl enable mongod.service

sudo chown -R mongodb:mongodb /var/lib/mongodb

sudo chown mongodb:mongodb /tmp/mongodb-27017.sock

sudo service mongod restart

sudo systemctl status mongod

scp -i YasasServer_key.pem -r ./my-notes-app azureuser@20.51.228.239:/home/azureuser/apps/

pm2 start app.js -i max

```