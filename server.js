var express = require("express")
var port    = process.env.PORT || 80
var nhl     = require("./lib/nhl-cache")

var app = express.createServer()

app.get("/", function(req, rsp){
  rsp.send("Welcome to the makeshift nhl api\n")
})

app.get("/:team/:season?", function(req, rsp){
  rsp.header("Access-Control-Allow-Origin", "*")
  rsp.header("Access-Control-Allow-Headers", "X-Requested-With")
  nhl.team(req.params.team, req.params.season || "20132014", function(players){
    if(players){
      var body = JSON.stringify(players, null, 2) + "\n"
      rsp.header("Content-Type", "application/json")
      rsp.send(body)
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
