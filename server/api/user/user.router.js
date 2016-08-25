var express = require('express');
var router = express.Router();
var controller = require('./user.controller');

function isAuthenticated(req, res, next) {

    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    if (req.user.authenticated)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/');
}


router.get('/', isAuthenticated, controller.getUsers)
    .get('/:id', controller.getUser)
    .get('/profile/me', controller.me)
    .post('/', controller.createUser)
    .put('/:id', controller.updateUser)
    .delete('/:id', controller.deleteUser);

module.exports = router;