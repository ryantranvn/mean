var passport = require('passport');
var path = require('path');
var LocalStrategy = require('passport-local').Strategy;

var User = require(path.join(__dirname, '../app/site/models', 'member'));

passport.serializeUser(function(user, done) {
  	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  	User.getMemberById(id, function(err, user) {
    	done(err, user);
  	});
});

passport.use('local.signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
}, function(req, email, password, done) {
	// Validation
	req.checkBody('email', 'email is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		var messages = [];
		errors.forEach( function(error) {
			messages.push(error.msg);
		});
		return done(null, false, {errorAuth : true, messages: messages});
	}
	User.getMemberByEmail(email, function(err, user) {
		if (err) return done(err);
		if (user) {
			return done(null, false, {errorAuth : true, messages: 'email is already in use.'});
		}
		var newUser = new User();
		newUser.email = email;
		newUser.password = password;
		User.addMember(newUser, function(err, result){
			if (err) {
				return done(err);
			}
			return done(null, newUser, {errorAuth : false, messages: 'Account is created.'});
		});
	});
}));