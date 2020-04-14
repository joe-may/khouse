const Listing = require('../models/listing')
const Ticket = require('../models/ticket')

function index(req, res) {
  Listing.find({}, function(err, listing) {
    res.render('listings/index', { title: 'All Listings', listing
 })
  })
}

function show(req, res, next) {
    Listing.findById(req.params.id, (err, listing) => {
      Ticket.find({listing: listing._id}, (err, tickets) => {
        res.render('listings/show', { 
          title: 'Listing Details', listing, tickets
      })
    })
  })
}

function newListing(req, res) {
  newListing = new Listing();
  res.render('listings/new', { title: 'Add Listing' })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const listing = new Listing(req.body)
  listing.save(function(err) {
    if (err) {
      console.log('stay on this page')
      return res.redirect('/listings/new')
    } else {
      console.log('dashboard')
      res.redirect(`/listings`)
    }
  })
}
function delListing(req, res, next) {
  Student.findOne({'listings._id': req.params.id}, function(err, student) {
    student.facts.id(req.params.id).remove();
    student.save(function(err) {
      res.redirect('/listings');
    });
  });
}
module.exports = {
  index,
  show,
  new: newListing,
  create, 
  delListing
}

