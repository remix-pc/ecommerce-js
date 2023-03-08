var db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'passwordHere',
        database: 'user'
    }

})

module.exports = db