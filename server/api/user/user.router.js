var express = require('express');
var router = express.Router();
var controller = require('./user.controller');

router.get('/', controller.getUsers)
    .get('/:id', controller.getUser)
    .get('/profile/me', controller.me)
    .post('/', controller.createUser)
    .put('/:id', controller.updateUser)
    .delete('/:id', controller.deleteUser);

module.exports = router;