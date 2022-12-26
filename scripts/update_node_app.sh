#!/bin/bash

app="$1"
cd "$app/" || (echo "missing $app/ directory"; exit 1)
mkdir -p logs/; touch "logs/npm.txt"
npm i -q > "logs/npm.txt" || (echo "npm error"; exit 1)
cd ..