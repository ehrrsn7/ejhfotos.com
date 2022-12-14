const express = require("express")
const server = express()
const { getIPAddress } = require("./scripts/getIPAddress")
const port = 3000

server.listen(port, () => {
   console.log(`Example server listening on port ${[port]}:\n`)
   console.log(`\thttp://localhost:${port}/`)
   if (getIPAddress()) {
      console.log(`\thttp://${getIPAddress()}:${port}/`)
      console.log(`\thttp://ejhfotos.com:${port}/\n`)
   }
})

// use middleware to serve all react apps
server.use(express.static("./app/build"))
