require('dotenv').config()
const mongoose = require('mongoose')

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('db connected')
    } catch (error) {
        console.log(`Connect error! ${error}`)
    }
}

module.exports = { connect }