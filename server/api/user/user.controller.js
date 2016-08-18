var User = require('./user.model');

function Controller() {

}

Controller.prototype = {

    me: function(req, res) {
        User.findById(req.user.id, function(error, user) {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json(user);
            }
        })
    },


    getUsers: function(req, res) {
        User.find({}, function(error, users) {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json(users);
            }
        })
    },

    getUser: function(req, res) {

        User.findById(req.params.id, function(error, user) {

            if (error) {
                console.log(error);
            } else {
                res.status(201).json(user);
            }

        });

    },

    createUser: function(req, res) {

        User.create({
            username: req.body.username,
            password: req.body.password
        }, function(error, user) {

            if (error) {
                console.log(error);
            } else {
                res.status(201).json(user);
            }

        });

    },

    updateUser: function(req, res) {

        User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            surname: req.body.surname
        }, function(error, user) {
            if (error) {
                console.log(error);
            } else {
                res.status(201).json(user);
            }
        });

    },

    deleteUser: function(req, res) {

        User.remove({
            _id: req.params.id
        }, function(error) {
            if (error) {
                console.log(error);
            } else {
                res.status(204).json({
                    success: 'User deleted!'
                });
            }
        });

    }
};

module.exports = Controller.prototype;