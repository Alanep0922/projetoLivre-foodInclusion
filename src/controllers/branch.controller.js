const mongoose = require("mongoose")
const Branch = require("../models/branch")


const showBranch = async (req, res) => {
    const branches = await Branch.find().populate("market")
    return res.status(200).json(branches)
}
const createBranch = async (req, res) => {
    const branch = new Branch({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        market: req.body.market,
    })
    const existingBranch = await Branch.findOne({ name: req.body.name })
    if (existingBranch) {
        return res.status(409).json({ error: "Ramo de negócio já cadastrado!" })
    }
    try {
        const newBranch = await branch.save()
        return res.status(201).json(newBranch)
    } catch (err) {
        return res.status(400).json({
            message: error.message
        })
    }
}
const replaceBranch = async (req, res) => {

    const branch = await Branch.findById(req.params.id)
    if (branch == null) {
        return res.status(404).json({
            message: "Ramo de negócio não encontrado!"
        })
    }
    if (req.body.name != null) {
        branch.name = req.body.name
    }
    if (req.body.description != null) {
        branch.description = req.body.description
    }
    if (req.body.market != null) {
        branch.market = req.body.market
    }
    try {
        const branchReplace = await branch.save()
        res.status(200).json(branchReplace)

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
const deleteBranch = async (req, res) => {

    const branch = await Branch.findById(req.params.id)
    if (branch == null) {
        return res.status(404).json({
            message: "Ramo de negócio não encontrado!"
        })
    }
    try {
        await branch.remove()
        res.json({
            message: "Ramo de negócio deletado com sucesso!"
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    showBranch,
    createBranch,
    replaceBranch,
    deleteBranch
}