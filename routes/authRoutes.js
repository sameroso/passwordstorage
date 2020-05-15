const passport = require('passport');

const app = (app) => {
	app.get(
		'/auth/google',
		passport.authenticate('google', { scope: ['profile'] })
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google', {
			failureRedirect: '/login',
			failureFlash: true,
		}),
		function (req, res) {
			// Successful authentication, redirect home.
			res.redirect('/');
		}
	);
	app.get('/auth/facebook', passport.authenticate('facebook'));

	app.get(
		'/auth/facebook/callback',
		passport.authenticate('facebook', {
			failureRedirect: '/login',
			failureFlash: true,
		}),
		function (req, res) {
			// Successful authentication, redirect home.
			res.redirect('/');
		}
	);

	app.get('/api/current', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	  });
};

module.exports = app;
