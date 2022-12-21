// libraries
const express = require("express")

// express server
const server = express()

// import my scripts
const { getIPAddress } = require("./scripts/getIPAddress")

// define
const port = 81

// listen
server.listen(port, () => {
   console.log(`Example server listening on port ${[port]}:\n`)
   console.log(`\thttp://localhost:${port}/`)
   if (getIPAddress()) {
      console.log(`\thttp://${getIPAddress()}:${port}/`)
      console.log(`\thttp://ejhfotos.com:${port}/\n`)
   }
})

// use middleware to serve all react apps
server.use(express.static("./linktree/app/build"))
