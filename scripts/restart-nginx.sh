#!/bin/bash

# define
LOGFILE="logs/nginx-restart.txt"
ERROR_LOGFILE="logs/nginx-restart-error.txt"

# set up
mkdir -p logs
touch $LOGFILE $ERROR_LOGFILE

# execute
echo "Refreshing nginx reverse proxy host (in effect, applying changes to 'subdomain manager')."
sudo systemctl restart nginx \
> $LOGFILE \
2> $ERROR_LOGFILE \
|| echo "Unable to restart nginx (Ignore if not running on production server on linux)."
