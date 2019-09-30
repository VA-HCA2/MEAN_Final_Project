var express = require('express');
var router = express.Router();
const fs = require("fs");
var api = require('../controllers/users');

const authorization = require('./../utils/auth');

// POST: http://localhost:3000/users/register/
router.post('/register/', api.register);

// PUT: http://localhost:3000/users/
router.put('/edit/:id', api.updateUser);

// DELETE: http://localhost:3000/users/{user_id}
router.delete('/delete/:id', api.deleteUser);

// LOGIN:http://localhost:3000/users/login
router.post('/login',api.login)

// GET: http://localhost:3000/users
router.get('/admin/list', api.list);

// GET: http://localhost:3000/user/:id
router.get('/:id', api.listUser);

// LOGOUT: 
router.get('/logout', function (req, res, next) {
  req.session.username = null;
  res.redirect('/');
});

module.exports = router
