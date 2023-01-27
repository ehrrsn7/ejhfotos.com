#!/bin/bash

# define
LOGFILE="logs/git.txt"
ERROR_LOGFILE="logs/git-error.txt"

# set up
mkdir -p logs
touch $LOGFILE $ERROR_LOGFILE

# execute
echo "Pulling changes from the github repository."
git pull > $LOGFILE 2> $ERROR_LOGFILE
