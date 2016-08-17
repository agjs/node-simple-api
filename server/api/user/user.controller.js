var User = require('./user.model');

function Controller() {

}

Controller.prototype = {

    getUsers: function(req, res) {
       User.find({}, function(error, users){
           if(error) {
               console.log(error);
           } else {
                res.status(200).json(users);
           }
       })
    },

    getUser: function(req, res) {
        
        console.log('you wanted to get a single user', req.params.name);
        // get a single user
    },

    createUser: function(req, res) {
       
       User.create({username: req.body.username, password: req.body.password}, function(error, user){

           if(error) {
               console.log(error);
           } else {
               res.status(201).json(user);
           }

       });

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