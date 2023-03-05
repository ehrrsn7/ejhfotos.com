// import my scripts
import { use, listen } from "./scripts/index.js"

// create servers and listen on different ports
const www      = listen(81, "www")
const about    = listen(82, "about")
const linktree = listen(83, "linktree")
const notoil   = listen(84, "No-Toil-Task-Tracker")

// use middleware to serve react apps
use(www,       "./app/dist")
use(about,     "./about/dist")
use(linktree,  "./linktree/dist")
use(notoil,    "./No-Toil-Task-Tracker/dist")
