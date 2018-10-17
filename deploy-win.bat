@echo off

docker rm -f chr-app
docker run --name chr-app -d -v %cd%:/usr/share/nginx/html -p 8181:80 nginx:1.12-alpine
echo app running in http://localhost:8181

echo "When you finish run \"docker rm -f chr-app\""
