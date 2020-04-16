const Listing = require('../models/listing')
const Member = require('../models/member')


function index(req, res) {
  console.log('user',req.user)
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
// .populate('member')
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
        console.log(listing)
        res.render('listings/show', { 
          title: 'Listing Details', listing, 
          user: req.user,
          listing: listing
      })
    })
  })
}


function newListing(req, res) {
  res.render('listings/new', { title: 'Add Listing' })
  
}

function create(req, res) {
  console.log("!!!!!!!hgjh")
  // req.body.user = req.user._id; ///added this later
  Listing.create(req.body).then(function(listing){
    console.log(listing)
    listing.member = req.user._id
    listing.save()
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

function update(req, res) {
  Listing.findById(req.params.id, (err, listing) => {
    listing.date = req.body.date
    listing.title = req.body.title
    listing.budget = req.body.budget
    listing.location = req.body.location
    listing.save((err) => {
      res.redirect(`/listings/${req.params.id}`);
    })
  })
}
// function update(req, res) {
//   User.findById(req.user._id, function(err, user) {
//     var herbi = user.herbs.id(req.params.id);
//     herbi.name = req.body.name;
//     herbi.benefits = req.body.benefits;
//     herbi.uses = req.body.uses;
//     user.save( function(err) {
//       res.redirect(`/herbs/${req.params.id}`)
//     })
//     })} 

function edit(req, res, next) {
  Listing.findById(req.params.id, (err, listing) => {
    Listing.find({listing: listing._id}, (err) => {
      console.log(listing)
      res.render('./listings/edit', { 
        title: 'Edit listing',  
        user: req.user,
        listing
    })
  })
})
}

function show(req, res, next) {
  Listing.findById(req.params.id, (err, listing) => {
    Listing.find({listing: listing._id}, (err) => {
      console.log(listing)
      res.render('listings/show', { 
        title: 'Listing Details', listing, 
        user: req.user,
        listing: listing
    })
  })
})
}



module.exports = {
  index,
  show,
  new: newListing,
  create, 
  delListing,
  update,
  edit
}


