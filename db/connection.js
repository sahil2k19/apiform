const { Sequelize } = require("sequelize");

const dbname = process.env.DBNAME
const dbuser = process.env.DBUSER
const dbpass = process.env.DBPASS
const dbhost = process.env.DBHOST
const dbport = process.env.DBPORT
const sequelize = new Sequelize(dbname,dbuser,dbpass

,{
    host:dbhost,
    dialect:"mysql",
    port:dbport
}
 )


 module.exports = sequelize