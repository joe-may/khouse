var express = require('express');
var router = express.Router();
var passport = require('passport');

const listingsCtrl = require('../controllers/listings')

function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated())
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
  // Google OAuth callback route
 router.get('/Kluboauth', passport.authenticate(
  'google',
  {
    successRedirect : '/listings',
    failureRedirect : '/listings'
  }
));

router.get('/', listingsCtrl.index)
router.get('/new', listingsCtrl.new)
router.get('/:id', listingsCtrl.show)
// router.post('/', listingsCtrl.create)
router.post('/', isLoggedIn, listingsCtrl.create)

module.exports = router;