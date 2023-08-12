const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME , process.env.MYSQL_KEY_ID , process.env.MYSQL_KEY_PASSWORD , {
   dialect: "mysql",
   host:process.env.DB_HOST
});

module.exports = sequelize;