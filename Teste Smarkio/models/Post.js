const db = require('./db')

const Post = db.sequelize.define('msgusuarios', {
    mensagem: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post
    //Post.sync({ force: true })