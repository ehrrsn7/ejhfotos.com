import express from "express"

export function use(app, dist, index="index.html") {
   app.use(express.static(dist))
   app.get('*', function(r, res) {
     res.sendFile(index, {root: dist});
   })
}

export function runServer(port, subdomain, dist) {
   const app  = listen(port, subdomain)
   use(app, dist)
   return app
}
