const express = require('express'); //criar um servidor
const app = express() //puxando o servidor
const handlebars = require('express-handlebars') //tipo o html
const Post = require('./models/Post'); //puxando a parte de posts

// Config

// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars') //parte tipo html

// Salvar dados
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //o que salva o os dados na db

// Rotas

app.get('/', function(req, res) {
    Post.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function(posts) {
        res.render('home', { posts: posts })
    })

})
app.get('/cad', function(req, res) {
    res.render('formulário')
})

app.post('/add', function(req, res) {
    Post.create({
        mensagem: req.body.mensagem
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

app.get('/deletar/:id', function(req, res) {
    Post.destroy({ where: { 'id': req.params.id } }).then(function() {
        res.send("Postagem deletada com sucesso!")
    }).catch(function(erro) {
        res.send("Esta postagem não existe! ")
    })
})

app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081/cad")
})