#!/bin/bash

# define
LOGFILE="logs/pm2-stop.txt"
ERROR_LOGFILE="logs/pm2-stop-error.txt"

# set up
mkdir -p logs
touch $LOGFILE $ERROR_LOGFILE

# execute
mkdir -p logs
echo "Temporarily stopping server."
pm2 stop server \
> $LOGFILE \
2> $ERROR_LOGFILE \
|| echo "Either unable to stop server, or 'pm2' is not found (Ignore if not running on production server on linux)."