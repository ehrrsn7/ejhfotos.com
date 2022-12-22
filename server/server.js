// libraries
const express = require("express")

// import my scripts
const { listen } = require("./scripts/listen")

// listen
const www = listen(www, 81)
const about = listen(about, 82)
const linktree = listen(linktree, 83)

// use middleware to serve all react apps
www.use(express.static("./app/build"))
about.use(express.static("./app/build"))
linktree.use(express.static("./app/build"))

// TODO: use http://api.ejhfotos.com/ as ./api on port 3000
// TODO: use http://linktree.ejhfotos.com/ as ./linktree "
// TODO: use http://portfolio.ejhfotos.com/ as ./portfolio "
// TODO: use http://minecraft.ejhfotos.com/ as ./minecraft on port 25565?
// https://www.digitalocean.com/community/questions/how-do-i-point-my-custom-domain-to-my-ip-port-41-111-20-36-8080
