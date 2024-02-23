// require('dotenv').config()
const {Sequelize} = require("sequelize")
const URLModel = require("./models/URL")

// console.log(process.env.DATABASE);
// console.log(process.env.USER);
// console.log(process.env.PASSWORD);

// const DATABASE = process.env.DATABASE
// const USER = process.env.USER
// const PASSWORD = process.env.PASSWORD

// const sequelize = new Sequelize(`postgres://${USER}:${PASSWORD}@localhost/${DATABASE}`) 
const sequelize = new Sequelize("postgres://augusto:HjBO1ki5SkZricfFNbAc5QZ5XVKD1vPB@dpg-cnc01cla73kc73ej210g-a/chopit")

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