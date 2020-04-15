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
        default: () => {
            const date = new Date()
            date.setFullYear(date.getFullYear())
            return date
        }
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Listing', listingSchema)