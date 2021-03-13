const express = require('express');
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post');

// Config
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Save data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', function(req, res) {
    Post.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function(posts) {
        res.render('root', { posts: posts })
    })
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

app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
})