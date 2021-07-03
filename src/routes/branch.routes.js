const express = require("express") //chama o express
const router = express.Router() //executando o router
const controller = require("../controllers/branch.controller")

//Ler todos os ramos -> GET -> find() método
router.get("/", controller.showBranch)

//Ler todos os ramos de um negócio - GET -> find()
router.get("/", controller.branchByMarket)

//Criar um ramo -> POST -> save() método do mongo
router.post("/", controller.createBranch)

//Atualizar um ramo de negócio -> getById() ou findOne(), e save() 
router.put("/:id", controller.replaceBranch)

//Deletar um ramo de negócio -> DELETE -> getById() ou findOne(), remove()
router.delete("/:id", controller.deleteBranch)

module.exports = router