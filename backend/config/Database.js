import { Sequelize } from "sequelize";

const db = new Sequelize ('valodb','root','',{
    host: 'localhost',
    dialect: 'mysql',

});

export default db;