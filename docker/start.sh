#!/bin/bash
set -e
mkdir -p /var/www/montage.io/logs
touch /var/www/montage.io/logs/nginx.access.log
nginx -t
service nginx restart
npm run publish