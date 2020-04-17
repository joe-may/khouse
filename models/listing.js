const mongoose = require('mongoose')
const Schema = mongoose.Schema



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