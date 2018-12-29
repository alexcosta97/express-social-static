const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
   
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

const authFail = (done) => {
    done(null, false, {message: 'Incorrect email/password combination'});
};

passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({
        email: email
    }, (err, user) => {
        if(err) return done(err);

        //If the user does not exist
        if(!user) return authFail(done);

        // If the password isn't valid
        if(!user.validPassword(password)) return authFail(done);

        //If both the password and the username are correct
        return done(null, user);
    });
}));

module.exports = passport;