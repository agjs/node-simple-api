var Users = require('./user.model');

function Controller() {

}

Controller.prototype = {

    getUsers: function(req, res) {
        res.status(200).json(Users);
    },

    getUser: function(req, res) {
        
        console.log('you wanted to get a single user', req.params.name);
        // get a single user
    },

    createUser: function(req, res) {
        console.log('you wanna create a user with', req.body);
        // create a user
    },

    updateUser: function(req, res) {
        console.log('you wanted to update a user with id', req.params.id);
        // update user
    },

    deleteUser: function(req, res) {
        console.log('you wanted to delete a user with id', req.params.id);
        // delete user
    }
};

module.exports = Controller.prototype;