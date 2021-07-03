const mongoose = require("mongoose")

const marketSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    name: {
        type: String,
        require: true
    },
    createdIn: {
        type: Date,
        require: true,
        default: new Date
    },
})

module.exports = mongoose.model("market", marketSchema) 