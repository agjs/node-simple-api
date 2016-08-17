var express = require('express');
var router = express.Router();
var controller = require('./user.controller');

router.get('/', controller.getUsers)
    .get('/:name', controller.getUser)
    .post('/', controller.createUser)
    .put('/:id', controller.updateUser)
    .delete('/:id', controller.deleteUser);

module.exports = router;