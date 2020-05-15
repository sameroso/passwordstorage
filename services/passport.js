const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID:
				'648058795167-ptbd30mihueac5ds5292ddtmcaf7oldq.apps.googleusercontent.com',
			clientSecret: 'PGXaMSfEcfaEonfXsPNxQB9w',
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			try{
				const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
			}catch(err){
				console.log(err)
			}
			
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: '231996444765920',
			clientSecret: 'cc423b53e306d1d739de8becd85243c5',
			callbackURL: '/auth/facebook/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			try{
				const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			}
			const user = await new User({ facebookId: profile.id }).save();
			done(null, user);
			}catch(err){
				console.log(err)
			}
			
		}
	)
);
