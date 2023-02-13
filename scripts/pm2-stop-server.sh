#!/bin/bash

# define
ERROR_LOGFILE="logs/pm2-stop-error.txt"

# set up
mkdir -p logs
touch $ERROR_LOGFILE

# execute
echo "Temporarily stopping server."
sudo pm2 stop server \
2> $ERROR_LOGFILE \
|| echo "Either unable to stop server, or 'pm2' is not found (Ignore if not running on production server on linux)."