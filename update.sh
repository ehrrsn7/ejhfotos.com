#!/bin/bash

cd /Users/ehrrsn7/Documents/Code/PERN/ejhfotos.com/ 2> "" || echo "directory not found"

# define
function update_node_app {
   APP="$1"
   cd "$APP/" || (echo "missing $APP/ directory"; exit 1)
   mkdir -p logs/; touch "logs/npm.txt"
   npm i -q > "logs/npm.txt" || (echo "npm error"; exit 1)
   cd ..
}

function update_react_build {
   APP="$1"
   cd "$1" || (echo "missing $APP/ directory"; exit 1)
   touch "logs/react-build.txt"
   npm run build > "react-build.txt"
   cd ..
}

function update_express_app {
   echo "updating express application: $1/"
   update_node_app "$1"
}

function update_react_app {
   echo "updating react application: $1/"
   update_node_app "$1"
   update_react_build "$1"
}

# temporarily stop server
pm2 stop server || echo "(Ignore this if not on production server.)"

# pull changes from repository
git pull

# update server
update_express_app "server"

# update react applications
update_react_app "app"
update_react_app "about"
update_react_app "linktree"

# refresh nginx reverse proxy host
systemctl restart nginx || echo "Unable to restart nginx. (Ignore if not running on production server on linux)."

# start server up again
pm2 start server || echo "(Ignore if not on production server.)"

echo "Updates finished successfully."
