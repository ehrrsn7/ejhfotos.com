// libraries
const express = require("express")

// import my scripts
const { listen } = require("./scripts/listen")

// create servers and listen on different ports
const www      = listen(81, "www")
const about    = listen(82, "about")
const linktree = listen(83, "linktree")
const notoil   = listen(84, "No-Toil-Task-Tracker")

// use middleware to serve react apps
www.use(express.static("./app/build"))
about.use(express.static("./about/dist"))
linktree.use(express.static("./linktree/dist"))
notoil.use(express.static("./No-Toil-Task-Tracker/dist"))
