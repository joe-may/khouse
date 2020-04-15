const mongoose = require('mongoose')
const Schema = mongoose.Schema



const listingSchema = new Schema({
    date: {
        type: String,
    },
    title: {
        type: String,
    }, 
    budget: {
        type: String,
    },
    location: {
        type: String,
    },
    member: {
        type: Schema.Types.ObjectId, 
        ref: 'Member' 
    }
    
    
}, {
    timestamps: true
})

// var memberSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   avatar: String,
//   googleId: String,
// }, {
//   timestamps: true
// });


module.exports = mongoose.model('Listing', listingSchema)