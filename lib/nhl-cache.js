var redis  = require("redis")
var nhl    = require("./nhl")
var client = redis.createClient()

exports.team = function(team, season, cb){
  // 1. check for cached version
  // 2. return cache or create cache
  // 3. set expiry for cache

  var key = team + season

  client.get(key, function(err, reply){
    if(reply){
      // use cache
      client.incr("cache-hit", function(e,r){ })
      cb(JSON.parse(reply))
    }else{
      // restore cache
      nhl.team(team, season, function(players){
        client.multi()
        .set(key, JSON.stringify(players))
        .expire(key, 60 * 60 * 2) // cache will last for two minutes
        .incr("expensive-hit")
        .exec(function(err, replies){
          cb(players)
        })
      })
    }
  })
}
