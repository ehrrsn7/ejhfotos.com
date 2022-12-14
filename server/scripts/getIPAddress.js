const { networkInterfaces } = require('os');
const { exit } = require('process');

const isIPv4 = net => net.family === "IPv4"
const not255_0_0_0 = net => net.netmask !== "255.0.0.0"

function getIPAddress() {
   // found at https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
   try {
      // get all network interface objects and put them in nets[]
      let interfaces = networkInterfaces()
      let nets = []
      Object.keys(interfaces).forEach(name => {
         interfaces[name].forEach(net => {
            nets.push(net)
         })
      })

      // filter nets[] for our IP address
      let net = nets.filter(isIPv4).filter(not255_0_0_0)[0]
      if (!net) throw "IP Address not found."
      return net.address
   }
   catch (err) {
      console.error(err)
      return undefined
   }
}

if (typeof require !== 'undefined' && require.main === module) {
   // this is the main module
   let ipAddress = getIPAddress()
   console.log("Your LAN IPv4 Address:", ipAddress)
   if (!ipAddress)
      exit(1)
}

module.exports = { getIPAddress }