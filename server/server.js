// libraries
const express = require("express")

// import my scripts
const { getIPAddress } = require("./scripts/getIPAddress")

// express app
const app = express()

// listen
app.listen(80, () => {
   console.log(`App listening on port 80:\n`)
   console.log(`\thttp://localhost/`)
   if (getIPAddress()) {
      console.log(`\thttp://${getIPAddress()}:80/`)
      console.log(`\thttp://ejhfotos.com/\n`)
   }
})

// use middleware to serve all react apps
app.use(express.static("./app/build"))

// TODO: use http://api.ejhfotos.com/ as ./api on port 3000
// TODO: use http://linktree.ejhfotos.com/ as ./linktree "
// TODO: use http://portfolio.ejhfotos.com/ as ./portfolio "
// TODO: use http://minecraft.ejhfotos.com/ as ./minecraft on port 25565?
// https://www.digitalocean.com/community/questions/how-do-i-point-my-custom-domain-to-my-ip-port-41-111-20-36-8080
