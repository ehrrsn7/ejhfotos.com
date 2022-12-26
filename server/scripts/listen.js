// libraries
const express = require("express")

// import my scripts
const { getIPAddress } = require("./getIPAddress")

function listen(port, subdomain="") {
   const server = express()

   server.listen(port, () => {
      console.log(`'${subdomain}' App listening on port ${port}:\n`)
      console.log(`\thttp://localhost:${port}/`)
      if (getIPAddress()) {
         console.log(`\thttp://${getIPAddress()}:${port}/`)
         console.log(`\thttp://${subdomain}.ejhfotos.com/\n`)
      }
   })

   return server
}

module.exports = { listen }