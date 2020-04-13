const Ticket = require('../models/ticket')
const Listing = require('../models/listing')

const newTicket = (req, res) => {
    Listing.findById(req.params.id, (err, listing) => {
        res.render('tickets/new', {
            title: 'Add Ticket',
            listing
        })
    })
}

const create = (req, res) => {
    listingId = req.params.id
    req.body.listing = listingId
    Ticket.create(req.body, (err, ticket) => {
        res.redirect(`/listings/${listingId}`)
    })
}

module.exports = {
    new: newTicket, 
    create
}