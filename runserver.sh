#!/bin/bash

# for development, ignore in production
./scripts/mac-cd.sh

# run express server (listens on 3 ports, nginx handles subdomains in production)
node .
