import express from "express"

export function use(app, build, index="index.html") {
   // server build as static directory (it is, in a sense)
   app.use(express.static(build))
   // magic fix for domain.com/path/to/page functionality
   app.get('*', function(req, res) {
     res.sendFile(index, {root: build});
   })
}
