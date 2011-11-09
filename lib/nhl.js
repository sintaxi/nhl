var jsdom  = require("jsdom")
var jquery = "http://code.jquery.com/jquery-1.5.min.js"

exports.team = function(team, season, cb){
  // 1. fetch stats page for given season
  // 2. parse the page
  // 3. build into array of players

  // http://oilers.nhl.com/club/stats.htm?season=20102011
  var url = "http://" + team + ".nhl.com/club/stats.htm?season=" + season

  jsdom.env(url, [jquery], function(err, window){
    if(err) return cb(null)

    var $ = window.$

    var rows = $(".data").first().find("tr").not(".hdr")
    var players = []

    $(rows).each(function(i){
      var tds = $(rows[i]).find("td")
      var player = {
        sweater  : $(tds[0]).find(".sweaterNo").html(),
        position : $(tds[1]).html(),
        name     : $(tds[2]).find("a").html(),
        games    : $(tds[3]).html(),
        goals    : $(tds[4]).html(),
        assists  : $(tds[5]).html(),
        points   : $(tds[6]).html()
      }
      players.push(player)
    })
    cb(players)
  })
}