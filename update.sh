#!/bin/bash

# if we're in local development
./scripts/mac-cd.sh

# stop server temporarily
./scripts/pm2-stop-server.sh

# pull changes from repository
./scripts/pull-git-changes.sh

# update server
./scripts/update_express_app.sh "server"

# update react applications
./scripts/update_react_app.sh "app"
./scripts/update_react_app.sh "about"
./scripts/update_react_app.sh "linktree"

# refresh nginx reverse proxy host (to apply changes)
./scripts/restart-nginx.sh

# start server up again
./scripts/pm2-start-server.sh

echo "Updates finished successfully."
