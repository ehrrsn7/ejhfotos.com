// libraries
import express from "express"

// import my scripts
import { getIPAddress } from "./getIPAddress.js"

function announce(port, subdomain) {
   console.log(`'${subdomain}' App listening on port ${port}:\n`)
   console.log(`\thttp://localhost:${port}/`)
   if (getIPAddress()) {
      console.log(`\thttp://${getIPAddress()}:${port}/`)
      console.log(`\thttp://${subdomain}.ejhfotos.com/\n`)
   }
}

export function listen(port, subdomain="") {
   const server = express()
   server.listen(port, announce(port, subdomain))
   return server
}
