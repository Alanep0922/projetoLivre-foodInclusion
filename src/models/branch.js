const mongoose = require("mongoose")

const branchSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    name: {
        type: String,
        require: true
    },
    niche: {
        type: Array,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    market: {
       type: mongoose.Schema.Types.ObjectId, 
       require: true,
       ref: "market" 
    },
    createdIn: {
        type: Date,
        require: true,
        default: new Date
    }
})

module.exports = mongoose.model("branch", branchSchema) 