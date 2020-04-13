const mongoose = require('mongoose')
require('dotenv').config();

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });

mongoose.connect(
    process.env.DATABASE_URL, 
    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    }
)

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
}) 

module.exports = mongoose;