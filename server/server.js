// libraries
const express = require("express")

// import my scripts
const { listen } = require("./scripts/listen")

// create servers and listen on different ports
const www      = listen(81)
const about    = listen(82)
const linktree = listen(83)

// use middleware to serve react apps
www.use(express.static("./app/build"))
about.use(express.static("./app/build"))
linktree.use(express.static("./app/build"))

// TODO: use http://api.ejhfotos.com/ as ./api on port 3000
// TODO: use http://linktree.ejhfotos.com/ as ./linktree "
// TODO: use http://portfolio.ejhfotos.com/ as ./portfolio "
// TODO: use http://minecraft.ejhfotos.com/ as ./minecraft on port 25565?
// https://www.digitalocean.com/community/questions/how-do-i-point-my-custom-domain-to-my-ip-port-41-111-20-36-8080
