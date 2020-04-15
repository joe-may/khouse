var mongoose = require('mongoose');
const Schema = mongoose.Schema

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
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
}, {
    timestamps: true
})
var memberSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  listings: [listingSchema],
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);