//importar o express
const express = require('express')
//executar o express
const app = express()
//definir a porta do servidor local
const porta = 1010

//exportar o app e a porta
module.exports={app,porta}