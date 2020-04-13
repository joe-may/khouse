const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    }, 
    arrival : {
        type: Date
    }
}, {
    timestamps: true
})

const listingSchema = new Schema({
    date: {
        type: String,
        
    },
    title: {
        type: String,
        
    }, 
    budget: {
        type: Number,
        
    },
    location: {
        type: Date,
        default: () => {
            const date = new Date()
            date.setFullYear(date.getFullYear() + 1)
            return date
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Listing', listingSchema)