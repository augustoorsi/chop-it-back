require('dotenv').config()
const {Sequelize} = require("sequelize")
const URLModel = require("./models/URL")

console.log(process.env.DATABASE);
console.log(process.env.USER);
console.log(process.env.PASSWORD);


const DATABASE = process.env.DATABASE
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD

const sequelize = new Sequelize(`postgres://${USER}:${PASSWORD}@localhost/${DATABASE}`) 


sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.')
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err)
    })

URLModel(sequelize)

const {url} = sequelize.models



module.exports = { sequelize,url }