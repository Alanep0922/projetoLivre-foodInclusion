//Arquivo responsável pela rota default da aplicação

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Seja bem-vindo(a) a API Node.js + MongoDB + Heroku!',
    version: '1.0.0',
  })
})

module.exports = router;