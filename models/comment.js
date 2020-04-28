const mongoose = require('mongoose')
const Schema = mongoose.Schema



const commentSchema = new Schema({
    dcomment: {
        type: String,
    },
    user_id: {
        type: String,
    }, 
    listing_id: {
        type: String,
    },
}, {
    timestamps: true
})


module.exports = mongoose.model('Comment', commentSchema)