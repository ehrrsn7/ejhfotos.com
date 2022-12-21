#!/bin/bash

cd /Users/ehrrsn7/Documents/Code/PERN/ejhfotos.com/ || echo "directory not found"
cd www

# define
logfile="logs/npm.txt"
function makelogdir() {
   mkdir -p logs/;
   touch "$logfile"
}

# pull changes from repository
git pull

# update server
echo "updating express application..."
cd server/ || echo "missing server/ directory"; exit 1
makelogdir
npm i -q > logfile || echo "npm error"; exit 1
cd ..

# update react application
echo "updating react application..."
cd app/ || echo "missing app/ directory"; exit 1
makelogdir
npm i -q > logfile || echo "npm error"; exit 1
npm run build -q > logs/react-build.txt || echo "react build error"; exit 1
cd ..

echo "Updates finished successfully."