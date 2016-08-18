var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    surname: String
});


userSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};

var User = mongoose.model('User', userSchema);


module.exports = User;