#!/bin/bash

cd /Users/ehrrsn7/Documents/Code/PERN/ejhfotos.com/ || echo "directory not found"

# pull changes from repository
git pull

# update server
echo "updating express application..."
cd server/ || 
(echo "missing server/ directory"; exit 1)
mkdir -p logs/
touch logs/npm.txt
npm i -q > logs/npm.txt
cd ..

# update react application
echo "updating react application..."
cd app/ || 
(echo "missing app/ directory"; exit 1)
mkdir -p logs/
touch logs/npm.txt
npm i -q > logs/npm.txt
cd ..

echo "Updates finished successfully."