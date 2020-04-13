const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

router.post('/listings/:id/destinations', isLoggedIn, destinationsCtrl.create)

module.exports = router