var express = require('express');
var router = express.Router();
var passport = require('passport');

const listingsCtrl = require('../controllers/listings')

function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated())
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
//   // Google OAuth callback route
//  router.get('/Kluboauth', passport.authenticate(
//   'google',
//   {
//     successRedirect : '/listings',
//     failureRedirect : '/listings'
//   }
// ));

router.get('/', listingsCtrl.index)
router.get('/new', listingsCtrl.new)
router.get('/:id', listingsCtrl.show)
router.delete('/:id', listingsCtrl.delListing)
router.post('/', isLoggedIn, listingsCtrl.create)
router.get('/:id/edit', listingsCtrl.edit);
router.put('/update/:id', listingsCtrl.update)
router.post('/comments/:id',listingsCtrl.createcomment)

module.exports = router;