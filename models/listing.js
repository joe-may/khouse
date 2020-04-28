const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: {
        type: String,
    },
    user_id: {
        type: String,
    }, 
    listing_id: {
        type: String,
    },
    user_name: {
        type: String,
    },
}, {
    timestamps: true
})

const listingSchema = new Schema({
    date: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    }, 
    budget: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    name: {
      type: String,
    },
    contact: {
      type: String,
    },
    member: {
        type: Schema.Types.ObjectId, 
        ref: 'Member',
        require: true,
    },
    comments: [commentSchema]
    
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