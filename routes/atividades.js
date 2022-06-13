const atividades = require('../models/atividades')
const usuarios = require('../models/usuarios')

module.exports = (app)=>{
    //criar a rota para rendereizar a view atividades
    app.get('/atividades',async(req,res)=>{
        //capturar o id da barra de endereço
        var id = req.query.id
        //buscar o nome na collection usuarios
        var user = await usuarios.findOne()
        //buscar todas as atividades desse usuário
        var abertas = await atividades.find({usuario:id,status:0}).sort({data:1})
        //buscar todas as atividades desse usuário
        var entregues = await atividades.find({usuario:id,status:1}).sort({data:1})
        //buscar todas as atividades desse usuário
        var excluir = await atividades.find({usuario:id,status:2}).sort({data:1})

        //console.log(buscar)
        res.render('atividades.ejs',{nome:user.nome,id:user._id,dados:abertas,dadosx:excluidas,dadose:entregues})   
    })
    //gravar as informações do formulário na collection atividades
    app.post('/atividades',async(req,res)=>{
        //recuperando as informações digitadas
        var dados = req.body
        //exibindo no terminal
        //console.log(dados)
        //conectar com o database
        const conexao = require('../config/database')()
        //model atividades
        const atividades = require('../models/atividades')
        //salvar as informações do formulário no database
        var salvar = await new atividades({
            data:dados.data,
            tipo:dados.tipo,
            disciplina:dados.disciplina,
            entrega:dados.entrega,
            instrucoes:dados.orientacao,
            usuario:dados.id
        }).save()
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+dados.id)
    })
    //excluir atividades
    app.get("/excluir",async(req,res)=>{
        //recuperar o parâmetro id da barra de endereço
        var id = req.query.id
        var excluir = await atividades.findOneAndUpdate(
            {_id:id},
            {status:2}
        )
        //redirecionar para a rota atividades
        res.redirect('/atividades?id='+excluir.usuario)
    })

        //entregar atividades
        app.get("/entregue",async(req,res)=>{
            //recuperar o parâmetro id da barra de endereço
            var id = req.query.id
            var entregue = await atividades.findOneAndUpdate(
                {_id:id},
                {status:1}
            )
            //redirecionar para a rota atividades
            res.redirect('/atividades?id='+entregue.usuario)
        })
    
}