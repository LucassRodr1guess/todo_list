//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:logineregistro@fiaptecnico.solkl.mongodb.net/dblr')
}

//exportar as infomações para acesso externo
module.exports = conn 