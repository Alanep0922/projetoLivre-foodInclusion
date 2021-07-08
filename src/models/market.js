const mongoose = require("mongoose")

const marketSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId, 
        require: true,
        ref: "branch" 
     },
    createdIn: {
        type: Date,
        require: true,
        default: new Date
    },
})

module.exports = mongoose.model("market", marketSchema) 