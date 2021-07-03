require('dotenv').config() //config o dotenv
const mongoose = require('mongoose') // importa o mongoose

const connect = () => {
    mongoose.connect(process.env.MONGODB_URI, { //acessando uma váriavel dentro do env
        useNewUrlParser: true, //chama por padrão
        useUnifiedTopology: true //chama por padrão para concetar
    }).then(console.log('db connected')) //// espera a resposta de sucesso e mostra no console
        .catch(err => console.err) // se a conexao der errado pega o erro e mostra no console
}

module.exports = { connect } 