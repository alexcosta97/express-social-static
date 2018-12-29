const User = require('../models/user');
const passport = require('../passport');

module.exports.showRegistrationForm = (req, res, next) => {
    res.render('register');
};

module.exports.showLoginForm = (req, res, next) => {
    res.render('login');
};

exports.createSession = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
});

module.exports.createUser = (req, res, next) => {
    User.register(req.body.email, req.body.password, (err, user) => {
        if(err) return next(err);
        req.login(user, (err) => {
            if(err) return next(err);
            res.redirect('/');
        });
    });
};