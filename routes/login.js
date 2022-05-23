module.exports = (app)=>{
    //abrir a view login.ejs
    app.get('/login', (req,res)=>{
        res.render('login.ejs')
    })

    //abrir a view atividades
    app.post('/login',async(req,res)=>{
        //conectar com o banco de dados
        const conexao = require('../config/database')()
        //importar a model usuarios
        const usuarios = require('../models/usuarios')
        //procurar pelo endereço de email
        var procurar = await usuarios.findOne({email:req.body.email})
        if(!procurar){
            return res.send('Email não cadastrado!!')
        }

        res.render('atividades.ejs')
    })
}