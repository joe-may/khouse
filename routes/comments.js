var express = require('express');
var router = express.Router();
var passport = require('passport');

const commentsCtrl = require('../controllers/comments')

function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated())
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

router.get('/', commentsCtrl.index)
router.get('/new', commentsCtrl.new)
router.get('/:id', commentsCtrl.show)

router.post('/', isLoggedIn, commentsCtrl.create)
router.get('/:id/edit', commentsCtrl.edit);
router.put('/update/:id', commentsCtrl.update)

module.exports = router;
