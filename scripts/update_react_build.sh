#!/bin/bash

# define
APP="$1"
LOGFILE="logs/react-build.txt"
ERROR_LOGFILE="logs/react-build-error.txt"

# set up
mkdir -p logs
touch $LOGFILE $ERROR_LOGFILE

# change into `app`/ directory
cd "$APP/" || (echo "Missing $APP/ directory."; exit 1)

# execute
npm run build > $LOGFILE 2> $ERROR_LOGFILE

# change back into parent directory
cd ..
