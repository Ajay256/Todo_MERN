const mongoose = require('mongoose');
require('dotenv').config()
const connectToDb = async() => {

    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = connectToDb;