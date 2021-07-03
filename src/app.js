const express = require("express") //chama o express
const cors = require("cors") //chama o cors
const app = express() //executa o express

//conectar o db
const db = require('./configs/database') //chamando o database
db.connect() //conectado o db

app.use(cors())//executa o cors
app.use(express.json()) //executa o json no express

//usar as rotas
const index = require("./routes/index")
//const branch = require("./routes/branch.routes")
const market = require("./routes/market.routes")

app.use("/", index)
//app.use("/branch", branch)
app.use("/market", market)

module.exports = app