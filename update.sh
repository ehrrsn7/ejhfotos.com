#!/bin/bash

cd /Users/ehrrsn7/Documents/Code/PERN/ejhfotos.com/ || echo "directory not found"

# define
function update_node_app {
   app="$1"
   cd "$app/" || (echo "missing $app/ directory"; exit 1)
   mkdir -p logs/; touch "logs/npm.txt"
   npm i -q > "logs/npm.txt" || (echo "npm error"; exit 1)
   cd ..
}

function update_express_app {
   echo "updating express application: $1/"
   update_node_app "$1"
}

function update_react_app {
   echo "updating react application: $1/"
   update_node_app "$1"
}

# pull changes from repository
git pull

# update server
update_express_app "server"

# update react applications
update_react_app "app"
update_react_app "about"
update_react_app "linktree"

echo "Updates finished successfully."
