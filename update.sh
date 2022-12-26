#!/bin/bash

cd /Users/ehrrsn7/Documents/Code/PERN/ejhfotos.com/ || echo "directory not found"

# pull changes from repository
git pull

# update server
./scripts/update_express_app.sh "server"

# update react applications
./scripts/update_react_app.sh "app"
./scripts/update_react_app.sh "about"
./scripts/update_react_app.sh "linktree"

# refresh nginx reverse proxy host
systemctl restart nginx || echo "Unable to restart nginx. (Ignore if not running on production server on linux)."

# start server up again
pm2 start server || echo "(Ignore if not on production server.)"

echo "Updates finished successfully."
