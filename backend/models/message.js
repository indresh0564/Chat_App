const Sequelize = require('sequelize');
const sequelize = require('../database/mysql');

const message = sequelize.define('message', {
    id:{
        primaryKey: true,
       allowNull:false,
       type:Sequelize.INTEGER,
       autoIncrement:true
    },
    userId:{
        type:Sequelize.INTEGER, 
        allowNull:false,
    },
    userMessage:{
        type:Sequelize.STRING,
        allowNull:false
    }
}) 

module.exports = message;