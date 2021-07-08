const mongoose = require("mongoose")
const Market = require("../models/market")

const createMarket = async (req, res) => {
    const market = new Market({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        city: req.body.city,
        branch: req.body.branch,
    })
    const existingMarket = await Market.findOne({ name: req.body.name })
    if (existingMarket) {
        return res.status(409).json({ error: "Negócio já cadastrado!" })
    }
    try {
        const newMarket = await market.save()
        return res.status(201).json({
            message: 'Negócio cadastrado com sucesso!',
            newMarket
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
const showMarkets = async (req, res) => {
    try {
        const martkets = await Market.find().populate("branch")
        return res.status(200).json(martkets)
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}
const showMarketCity = async (req, res) => {
    try {
        const { city } = req.query
        const market = await Market.find({city: city})
        if (market.length == 0 || city == " " || city == "") {
            return res.status(404).json({
                message: "Não temos negócios cadastrados nesta cidade!"
            })
        }
        res.status(200).json(market)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const replaceMarket = async (req, res) => {

    const market = await Market.findById(req.params.id)
    if (market == null) {
        return res.status(404).json({
            message: "Negócio não encontrado!"
        })
    }
    if (req.body.name != null) {
        market.name = req.body.name
    }
    if (req.body.description != null) {
        market.description = req.body.description
    }
    if (req.body.city != null){
        market.city = req.body.city
    }
    if (req.body.branch != null) {
        market.branch = req.body.branch
    }
    try {
        const marketReplace = await market.save()
        res.status(200).json(marketReplace)

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
const deleteMarket = async (req, res) => {
    const market = await Market.findById(req.params.id)
    if (market == null) {
        return res.status(404).json({
            message: "Negócio não encontrado!"
        })
    }
    try {
        await market.remove()
        res.json({
            message: "Negócio deletado com sucesso!"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    createMarket,
    showMarkets,
    showMarketCity,
    replaceMarket,
    deleteMarket
}