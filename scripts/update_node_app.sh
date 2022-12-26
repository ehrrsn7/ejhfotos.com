#!/bin/bash

# define
APP="$1"
LOGFILE="logs/npm.txt"
ERROR_LOGFILE="logs/npm-error.txt"

# set up
mkdir -p logs
touch $LOGFILE $ERROR_LOGFILE

# change into `app`/ directory
cd "$APP/" || (echo "Missing $APP/ directory."; exit 1)

# execute
npm i -q > $LOGFILE 2> $ERROR_LOGFILE || (echo "npm error"; exit 1)

# change back into parent directory
cd ..