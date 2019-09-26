var express = require('express');
var router = express.Router();
var fs=require('fs');
var userService=require('../services/userService');

// Leagues get request for page
router.get('/',(request, response) => {
    if ( request.session.username == null)
    {
        response.statusCode=401;
        response.redirect('/');
    }
    else{
        response.render('leagues', {pageTitle: 'Leagues'});
    }
});

// Leagues get request for data
router.get('/data', (request, response) => {
    try{
        response.end(fs.readFileSync('./data/leagues.json'));
    }
    catch(err){
        // if there is nothing send an empty array 
        response.end('[]');
    }
});


module.exports=router;

