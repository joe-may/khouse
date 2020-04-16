var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
  // res.redirect('/listings');
});


///// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/Kluboauth', passport.authenticate(
  'google',
  {
    successRedirect : '/listings',
    failureRedirect : '/yguyg'
  }
));

// Google OAuth login route
// router.get('/auth/google', passport.authenticate(
//   'google',
//   { scope: ['profile', 'email'] }
// ));
// // Google OAuth callback route
// router.get('/oauth2callback', passport.authenticate(
//   'google',
//   {
//     successRedirect : '/listings',
//     failureRedirect : '/listings'
//   }
// ));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/listings');
});



module.exports = router;