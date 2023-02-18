#!/bin/bash

# if we're in local development
./scripts/mac-cd.sh

# stop server temporarily
./scripts/pm2-stop-server.sh

# make sure dependencies are installed (TODO)
node -v || echo "node not installed, installing..."
npm -v || echo "npm not installed, installing..."
nginx -v || echo "nginx not installed, installing..."
pm2 -v || echo "pm2 not installed, installing..."

# shout if installers failed to install the correct dependencies * todo *

# pull changes from repository
./scripts/pull-git-changes.sh

# update server
./scripts/update_express_app.sh "server"

# update react applications
./scripts/update_react_app.sh "app"
./scripts/update_react_app.sh "about"
./scripts/update_react_app.sh "linktree"
./scripts/update_react_app.sh "No-Toil-Task-Tracker"

# refresh nginx reverse proxy host (to apply changes)
./scripts/restart-nginx.sh

# start server up again
./scripts/pm2-start-server.sh

echo "Updates finished successfully."
