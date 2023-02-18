// libraries
import express from "express"
import { listen } from "./scripts/listen.js"

const server = listen(80, "")

server.use(express.static("./dist"))
