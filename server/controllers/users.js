var userService = require('../services/userService');
var session = require('express-session')
var Controller = {};

// GET: http://localhost:3000/users/
Controller.list = (req, res) => {
    userService.list()
        .then((users) => {
            if (users) {
                res.json(users);
            } else {
                res.end('No Users found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.end('Listing Users error.');
        });
};


// GET: http://localhost:3000/users/:id
Controller.listUser = (req, res) => {
    let userId = req.params.id;
    userService.listUser(userId)
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.json({ "error": "No User found" });
            }
        })
        .catch((err) => {
            console.log(`Listing User error: ${err}`);
            res.json({ "error": "Listing User error" });
        });
};


// POST: http://localhost:3000/register/
Controller.register = (req, res) => {
    userService.register({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.json({ 'error': 'Creating User error.' });
        });
};

// PUT: http://localhost:3000/edit/id

Controller.updateUser = (req, res) => {
    let userId = req.params.id
    userService.update(userId, {
        username: req.body.username,
        email: req.body.email,
    })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Updating User error: ${err}`);
            res.end('Updating User error.');
        });
};

// DELETE: http://localhost:3000/users/{user_id} 
Controller.deleteUser = (req, res) => {
    userService.delete(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};

// POST: http://localhost:3000/login/

Controller.login = (req, res) => {
    userService.login({
        username: req.body.username,
        password: req.body.password
    })
        .then((user) => {
            if (user) {
                 {
                    req.session.username = user.username;
                    req.session.is_admin = user.is_admin;
                    res.json(user);
                 }
            }    
         else {
                    res.json({ "error": "No User found" });
                }   
        })
        .catch((err) => {
            console.log(`Error loging in: ${err}`);
            res.status(500)
            res.end('Error Loging in.');
        });

};

module.exports = Controller;


