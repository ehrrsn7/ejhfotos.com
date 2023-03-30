import express from "express"
import loopback from "my-loopback-ip-is"

console.log(loopback("0.0.0.0"))

const server = express()
// server.use(parser.json())
// server.use(parser.urlencoded({extended: true}))
server.use(express.static("dist"))
server.listen(80, "0.0.0.0")
