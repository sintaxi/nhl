var express = require("express")
var port    = process.env.PORT || 8001
var nhl     = require("./lib/nhl-cache")

var app = express.createServer()

app.get("/", function(req, rsp){
  rsp.send("welcome to the nhl api\n")
})

app.get("/:team/:season?", function(req, rsp){
  nhl.team(req.params.team, req.params.season || "20112012", function(players){
    if(players){
      var body = JSON.stringify(players, null, 2) + "\n"
      rsp.send(body, {"Content-Type": "application/json"})
    }else{
      rsp.send("stats not found\n", 404)
    }
  })
})

app.get("*", function(req, rsp){
  rsp.send("not found\n", 404)
})

app.listen(port)
console.log("listening on port", port)
