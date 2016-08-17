var Users = require('./user.model');

function Controller() {

}

Controller.prototype = {

    getUsers: function(req, res) {
        res.status(200).json(Users);
    },

    getUser: function(req, res) {

    },

    createUser: function(req, res) {

    },

    updateUser: function(req, res) {

    },

    deleteUser: function(req, res) {

    }
};

module.exports = Controller.prototype;