const fs = require('fs')
module.exports = {
    development: {
        username: 'admin',
        password: 'root',
        database: 'admin',
        host: 'localhost',
        dialect: 'postgres',
    },
    production: {
        username: 'doadmin',
        password: 'AVNS_gMNa_uHcSrSrSX0i8Gr',
        database: 'defaultdb',
        host: 'db-postgresql-fra1-08507-do-user-14504070-0.b.db.ondigitalocean.com',
        dialect: 'postgres',
        port: 25060,
        dialectOptions: {
            ssl: {
              ca: fs.readFileSync('config/ca-certificate.crt')
            },
        },
    },
};