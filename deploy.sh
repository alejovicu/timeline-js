#! /usr/bin/sh
docker rm -f chr-app
docker run --name chr-app -d -v $(pwd):/usr/share/nginx/html -p 8181:80 nginx:1.12-alpine
echo app running in http://localhost:8181
