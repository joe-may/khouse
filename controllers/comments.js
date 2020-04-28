const Comment = require('../models/comment')
const Member = require('../models/member')
const Listing = require('../models/listing')


function index(req, res) {
  console.log('user',req.user)
  Comment.find({}, function(err, comments) {
    console.log(comments)
    res.render('comments/index', { 
      title: 'All comments', 
      comments, 
      user: req.user
    })
  })
}


function show(req, res, next) {
    Comment.findById(req.params.id, (err, comment) => {
      Comment.find({dcomment: comment._id}, (err) => {
        console.log(comment)
        res.render('listings/show', { 
          title: 'comment Details', comment, 
          user: req.user,
          comment: comment
      })
    })
  })
}


function newcomment(req, res) {
  res.render('comments/new', { title: 'Add comment' })
  
}

function create(req, res) {
  console.log("!!!!!!!hgjh")
  // req.body.user = req.user._id; ///added this later
  Comment.create(req.body).then(function(comment){
    console.log(comment)
    comment.user_id = req.user._id
    // comment.listing_id = req.listing.name
    // comment.listing_id = "123"
    comment.save()
    //res.redirect(`/comments`)
  }).catch(err => {
    console.log(`caught the error: ${err}`);
    return res.status(500).json(err);
  });
}


function delcomment(req, res, next) {
//  console.log('hit delete');
// Comment.deleteOne({_id:req.params.id})
//  .then((err) => {
//    res.redirect(`/flights`)
//   })
}

function update(req, res) {
//   Comment.findById(req.params.id, (err, comment) => {
//     comment.date = req.body.date
//     comment.title = req.body.title
//     comment.budget = req.body.budget
//     comment.location = req.body.location
//     comment.name = req.body.name
//     comment.contact = req.body.contact
//     comment.save((err) => {
//       res.redirect(`/comments/${req.params.id}`);
//     })
//   })
}

function edit(req, res, next) {
//   Comment.findById(req.params.id, (err, comment) => {
//     Comment.find({comment: comment._id}, (err) => {
//       console.log(comment)
//       res.render('./comments/edit', { 
//         title: 'Edit comment',  
//         user: req.user,
//         comment
//     })
//   })
// })
}

function show(req, res, next) {
//   Comment.findById(req.params.id, (err, comment) => {
//     Comment.find({comment: comment._id}, (err) => {
//       console.log(comment)
//       res.render('comments/show', { 
//         title: 'comment Details', comment, 
//         user: req.user,
//         comment: comment
//     })
//   })
// })
}



module.exports = {
  index,
  show,
  new: newcomment,
  create, 
  delcomment,
  update,
  edit
}


