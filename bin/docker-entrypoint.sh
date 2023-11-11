#!/bin/sh

cd /app || exit

echo "Configuring environment variables for ReactJS"
./docker-env.sh

echo "NODE_ENV set to ${NODE_ENV}"
echo "REACT_APP_DATALOADER_URL set to ${REACT_APP_DATALOADER_URL}"
echo "REACT_APP_UI_URL_COMPANYNAME set to ${REACT_APP_UI_URL_COMPANYNAME}"
echo "NGINX_CONTENT_SECURITY_POLICY set to ${NGINX_CONTENT_SECURITY_POLICY}"

nginx -g "daemon off;"
