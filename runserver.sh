#!/bin/bash

# for development, ignore in production
cd /Users/ehrrsn7/Documents/Code/PERN/ejhfotos.com/ || echo "directory not found"

# run express server (listens on 3 ports, nginx handles subdomains in production)
node server/server.js
