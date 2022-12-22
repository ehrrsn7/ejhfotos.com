// libraries
const express = require("express")

// import my scripts
const { getIPAddress } = require("./getIPAddress")

function listen(port) {
   const server = express()
   
   server.listen(port, () => {
      console.log(`App listening on port ${port}:\n`)
      console.log(`\thttp://localhost:${port}/`)
      if (getIPAddress()) {
         console.log(`\thttp://${getIPAddress()}:${port}/`)
         console.log(`\thttp://ejhfotos.com/\n`)
      }
   })
   
   return server
}

module.exports = { listen }