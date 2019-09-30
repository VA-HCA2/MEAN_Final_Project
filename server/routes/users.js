var express = require('express');
var router = express.Router();
const fs = require("fs");
var api = require('../controllers/users');

// Route to register a users 
// POST: http://localhost:3000/users/register/
router.post('/register/', api.register);

//Route to update a user 
// PUT: http://localhost:3000/users/
router.put('/edit/:id', api.updateUser);

// Delete a user route 
// DELETE: http://localhost:3000/users/{user_id}
router.delete('/delete/:id', api.deleteUser);

// Login route
// LOGIN:http://localhost:3000/users/login
router.post('/login',api.login)

// Route to list all users that are not admin 
// GET: http://localhost:3000/users
router.get('/admin/list', api.list);

// Route to get user by id 
// GET: http://localhost:3000/user/:id
router.get('/:id', api.listUser);

// LOGOUT: 
router.get('/logout', function (req, res, next) {
  req.session.username = null;
  res.redirect('/');
});

module.exports = router
