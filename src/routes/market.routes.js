const express = require("express") 
const router = express.Router() 
const controller = require("../controllers/market.controller")

//Criar um novo negócio -> POST
router.post("/", controller.createMarket)

//Ler todos os negócios cadastrados -> GET 
router.get("/", controller.showMarkets)

//Ler todos os negócios de uma cidade - a parti da query -> GET
router.get("/city", controller.showMarketCity) 

//Atualizar/Substituir um negócio -> PUT 
router.put("/:id", controller.replaceMarket)

//Deletar um negócio -> DELETE
router.delete("/:id", controller.deleteMarket)

module.exports = router