const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

router.get('/flights/:id/tickets/new', ticketsCtrl.new)
router.post('/flights/:id/tickets', isLoggedIn, ticketsCtrl.create)

module.exports = router