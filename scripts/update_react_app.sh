#!/bin/bash

# execute
echo "Updating react application: $1/"
./scripts/update_node_app.sh "$1"
./scripts/update_react_build.sh "$1"
