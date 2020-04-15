const Listing = require('../models/listing')


function index(req, res) {
  console.log(req.user)
  Listing.find({}, function(err, listings) {
    console.log(listings)
    res.render('listings/index', { 
      title: 'All Listings', 
      listings, 
      user: req.user
    })
  })
}
// function index(req, res) {
//   Listing.find()
//   .populate('member')
//   .exec(function(err, listings) {
//     res.render('listings/index', { 
//       title: 'All Listings', 
//       listings, 
//       user: req.user
//     })
//   })
// }

function show(req, res, next) {
    Listing.findById(req.params.id, (err, listing) => {
      Listing.find({listing: listing._id}, (err) => {
        res.render('listings/show', { 
          title: 'Listing Details', listing
      })
    })
  })
}

function newListing(req, res) {
  res.render('listings/new', { title: 'Add Listing' })
  
}

function create(req, res) {
  console.log(req.body)
  // req.body.user = req.user._id; ///added this later
  Listing.create(req.body).then(function(listing){
    console.log(listing)
    res.redirect(`/listings`)
  }).catch(err => {
    console.log(`caught the error: ${err}`);
    return res.status(500).json(err);
  });
}
// const create = (req, res) =>{
//   // IF NOTHING IN THE KEY DELETE THE KEY
//   for (let key in req.body) {
//       if (req.body[key] === '') delete req.body[key];
//   }
//   // FED USER ID TO THE MATZA whic loged the id in the new matza
//   req.body.user = req.user._id;
//   // create a new matza
//   const matza = new Matza(req.body);
//   // save the new matza to the database
//   matza.save(function(err) {
//       if (err) return res.redirect('/matzas/new');
//       // redirect to matza index page
//       res.redirect(`/matzas`);
//   })
// };

function delListing(req, res, next) {
 console.log('hit delete');
 Listing.deleteOne({_id:req.params.id})
 .then((err) => {
   res.redirect(`/listings`)
  })
}
module.exports = {
  index,
  show,
  new: newListing,
  create, 
  delListing
}