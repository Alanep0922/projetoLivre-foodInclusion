const mongoose = require('mongoose');

//estrutura do seu model (atributos da sua entidade)
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

// atribuindo o esquema a uma collection
// estou definindo o nome da collection que irei salvar no banco
const User = mongoose.model('user', userSchema);

// exportar o model para ser utilizado
module.exports = User;