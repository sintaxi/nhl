var express = require("express")
var port    = process.env.PORT || 8001
var nhl     = require("./lib/nhl-cache")

var app = express.createServer()

app.get("/", function(req, rsp){
  rsp.send("Welcome to the makeshift nhl api\n")
})

app.configure(function(){
  app.use(function(req, rsp, next){
    rsp.header("Access-Control-Allow-Origin", "*")
    rsp.header("Access-Control-Allow-Headers", "X-Requested-With")
    next()
  })
});

app.get("/:team/:season?", function(req, rsp){
  nhl.team(req.params.team, req.params.season || "20132014", function(players){
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
