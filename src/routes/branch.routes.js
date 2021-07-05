const express = require("express") 
const router = express.Router() 
const controller = require("../controllers/branch.controller")

//Ler todos os ramos de negócio -> GET 
router.get("/", controller.showBranch)

//Criar um ramo de negócio -> POST 
router.post("/", controller.createBranch)

//Atualizar/Substituir um ramo de negócio -> PUT 
router.put("/:id", controller.replaceBranch)

//Deletar um ramo de negócio -> DELETE 
router.delete("/:id", controller.deleteBranch)

module.exports = router