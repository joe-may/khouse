var express = require('express');
var router = express.Router();

const listingsCtrl = require('../controllers/listings')

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

router.get('/', listingsCtrl.index)
router.get('/new', listingsCtrl.new)
router.get('/:id', listingsCtrl.show)
router.post('/', isLoggedIn, listingsCtrl.create)

module.exports = router;