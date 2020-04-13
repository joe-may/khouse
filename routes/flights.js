var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights')

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)
router.post('/', isLoggedIn, flightsCtrl.create)

module.exports = router;