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
about.use(express.static("./about/build"))
linktree.use(express.static("./linktree/build"))
