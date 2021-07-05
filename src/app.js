const express = require("express") 
const cors = require("cors") 
const app = express() 

//conectando o db
const db = require('./configs/database') 
db.connect() 

app.use(cors())
app.use(express.json()) 

//usar as rotas
const index = require("./routes/index")
const branch = require("./routes/branch.routes")
const market = require("./routes/market.routes")

app.use("/", index)

app.use("/branch", branch)
app.use("/market", market)

module.exports = app