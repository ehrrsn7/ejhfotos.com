#!/bin/bash

cd /Users/ehrrsn7/Documents/Code/PERN/ejhfotos.com/ || echo "directory not found"
cd server || (echo "server dir not found"; exit 1)
pm2 start server.js
