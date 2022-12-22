// libraries
const express = require("express")

// import my scripts
const { getIPAddress } = require("./getIPAddress")

function listen(server, port) {
   server.listen(port, () => {
      console.log(`App listening on port ${port}:\n`)
      console.log(`\thttp://localhost:${port}/`)
      if (getIPAddress()) {
         console.log(`\thttp://${getIPAddress()}:${port}/`)
         console.log(`\thttp://ejhfotos.com/\n`)
      }
   })
}

module.exports = { listen }