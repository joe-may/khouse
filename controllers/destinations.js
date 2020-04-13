const Listing = require('../models/listing')

const create = (req, res) => {
    Listing.findById(req.params.id, (err, listing) => {
        listing.destinations.push(req.body)
        listing.save((err) => {
            res.redirect(`/listings/${listing._id}`)
        })
    })
}

module.exports = {
    create
}