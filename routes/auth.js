const router = require('express').Router();
const passport = require('passport');

// Auth login.  This route will be '/auth/login'
router.get('/login', (req, res) => {
  res.render('login');
});

// Auth logout. This route will be '/auth/logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

// Auth with google.  This route will be '/auth/google'
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// callback route for google to redirect too
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('you reached the callback URI');
});

// Exporting the router instance with all of the route handlers attached to it
// to be used in the server.js file
module.exports = router;
