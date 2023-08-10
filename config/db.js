const { Sequelize } = require('sequelize');
const dbConfig = require('./config')
let sequelize;

if(process.env === "production"){
  sequelize = new Sequelize(dbConfig.production.database, dbConfig.production.username, dbConfig.production.password, {
    host: dbConfig.production.host,
    dialect: dbConfig.production.dialect,
    port: dbConfig.production.port
  });
}else{
  sequelize = new Sequelize(dbConfig.development.database, dbConfig.development.username, dbConfig.development.password, {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
  });
}

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch((error) => {
      console.error('Unable to connect to the database:', error);
    });

module.exports = sequelize;