var express = require('express');
var router = express.Router();
var fs=require('fs')

router.get('/data', (request, response) => {
    try{
        response.end(fs.readFileSync('./data/teams.json'));
    }
    catch(err){
        // if there is nothing send an empty array 
        response.end('[]');
    }
});

// GET MANY TEAMS BY LEAGUE
router.get("/data/:id", function (req, res) {
    let id = req.params.id;
    console.log("Received a GET request for teams in league " + id);                      

    let data = fs.readFileSync("./data/teams.json");
    data = JSON.parse(data);

    // find the matching teams for 
    let matches = getMatchingTeamsByLeague(id, data);

    //console.log("Returned data is: ");
    //logArrayOfTeams(matches);
    res.end( JSON.stringify(matches) );
})


// GET ONE TEAM BY ID
router.get("/data1/:id", function (req, res) {
    let id = req.params.id;
    console.log("Received a GET request for team " + id);

    let data = fs.readFileSync("./data/teams.json");
    data = JSON.parse(data);

    let match = getMatchingTeamById(id, data)
    console.log(match)
    if (match == null)
	{
		res.status(404).send("Not Found");
		return;
	}
    res.end( JSON.stringify(match) );
})

function getMatchingTeamsByLeague(leagueCode, data)
{
    let matches = data.filter( t => t.League == leagueCode );
    return matches;
}


function getMatchingTeamById(id, data)
{
    let match = data.find(t => t.TeamId == id);
    return match;
}

module.exports=router;