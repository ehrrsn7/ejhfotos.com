#!/bin/bash

# if we're in local development and we don't feel like 
# running from the terminal, this allows us to just 
# double-click on the update.sh file in finder 
# (update path if directory changes)

# define
ERROR_LOGFILE="logs/macbook-absolute-pathname-change-error.txt"

# set up
mkdir -p logs
touch $ERROR_LOGFILE

# execute
( if [[ "$OSTYPE" =~ ^darwin ]]; then
   if [[ $(id -u) -eq "501" ]]; then
      cd /Users/ehrrsn7/Documents/Code/Node/ejhfotos.com/ || echo "directory not found"
   fi
fi ) \
2> $ERROR_LOGFILE \
|| echo "Directory not found (ignore if in production)."
