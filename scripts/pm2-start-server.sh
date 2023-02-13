#!/bin/bash

# define
ERROR_LOGFILE="logs/pm2-restart-error.txt"

# set up
mkdir -p logs
touch $ERROR_LOGFILE

# execute
echo "Starting server up again."
sudo pm2 start server \
2> $ERROR_LOGFILE \
|| echo "Unable to start server (Ignore if not running on production server on linux)."
