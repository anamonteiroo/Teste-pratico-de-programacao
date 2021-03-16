const db = require('./db')

const Som = db.sequelize.define('arqaudio', {
    audios: {
        type: db.Sequelize.BLOB
    }
})

module.exports = Som
    //Som.sync({ force: true })