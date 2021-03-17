const express = require('express');
const app = express()
const handlebars = require('express-handlebars')
const Post = require('./models/Post');
const audio = require('./models/api');


// Configuração
// Template 
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Salvar dados
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
    let synthesizeParams = {
        text: req.body.mensagem,
        accept: 'audio/wav',
        voice: 'pt-BR_IsabelaV3Voice',
    };
    let date = Date.now();
    let path = `audios/${date}.wav`;

    audio.textToSpeech.synthesize(synthesizeParams)
        .then(response => {
            return audio.textToSpeech.repairWavHeaderStream(response.result);
        })
        .then(buffer => {
            audio.fs.writeFileSync(path, buffer);
        })
        .catch(err => {
            console.log('error:', err);
        })

    Post.create({
        mensagem: req.body.mensagem,
        caminho: path
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    });
})



app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
})