// libraries
const express = require("express")

// import my scripts
const { getIPAddress } = require("./getIPAddress")

function announce(port, subdomain) {
   console.log(`'${subdomain}' App listening on port ${port}:\n`)
   console.log(`\thttp://localhost:${port}/`)
   if (getIPAddress()) {
      console.log(`\thttp://${getIPAddress()}:${port}/`)
      console.log(`\thttp://${subdomain}.ejhfotos.com/\n`)
   }
}

function listen(port, subdomain="") {
   const server = express()
   server.listen(port, announce(port, subdomain))
   return server
}

module.exports = { listen }