#!/bin/bash

app="$1"
cd "$1" || (echo "missing $app/ directory"; exit 1)
touch "logs/react-build.txt"
npm run build > "logs/react-build.txt"
cd ..