const passport = require('passport');
const decrypt = require('../services/decrypt');

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
    if (!req.user) {
      res.send(req.user);
    } else {
      const decrypting = req.user.passwordList.map((data) => {
        data.password = decrypt(data.password);
      });
      res.send(req.user);
    }
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};

module.exports = app;
