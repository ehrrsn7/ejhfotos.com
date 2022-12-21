// libraries
const express = require("express")
const subdomain = require("express-subdomain")

// express server
const server = express()

// import my scripts
const { getIPAddress } = require("./scripts/getIPAddress")

// define
const port = 3000

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
server.use(express.static("./www/app/build"))
// TODO: use http://api.ejhfotos.com/ as ./api on port 3000
// TODO: use http://linktree.ejhfotos.com/ as ./linktree "
// TODO: use http://portfolio.ejhfotos.com/ as ./portfolio "
// TODO: use http://minecraft.ejhfotos.com/ as ./minecraft on port 25565?
