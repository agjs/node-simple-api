var passport = require('passport');
var router = require('express').Router();

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/users/profile/me',
        failureRedirect: '/login/unauthorized'
    })
);

router.get('/unauthorized', function(req, res) {
    res.status(401).json({
        unauthorized: 'Please enter valid username and password!'
    });
});


module.exports = router;