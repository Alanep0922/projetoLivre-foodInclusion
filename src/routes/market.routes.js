const express = require("express") 
const router = express.Router() 
const controller = require("../controllers/market.controller")

//create -> POST -> 
router.post('/', controller.createMarket)

//read -> GET -> 
router.get('/', controller.showMarkets)

//replace -> PUT ->
router.put("/:id", controller.replaceMarket)

//delete -> DELETE -> 
router.delete("/:id", controller.deleteMarket)

module.exports = router