require('dotenv').config()
const {Sequelize} = require("sequelize")
const URLModel = require("./models/URL")

// console.log(process.env.DATABASE);
// console.log(process.env.USER);
// console.log(process.env.PASSWORD);


// const DATABASE = process.env.DATABASE
// const USER = process.env.USER
// const PASSWORD = process.env.PASSWORD

// const sequelize = new Sequelize(`postgres://${USER}:${PASSWORD}@localhost/${DATABASE}`) 
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'dpg-cndqmtmd3nmc738mc0tg-a.oregon-postgres.render.com', // Cambia esto por la dirección de tu base de datos en Render
    username: 'chopit_vrw3_user',
    password: 'f8etXfjaIe426nk0GAsHNMIuQUFvwLjS',
    database: 'chopit_vrw3',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Solo si estás usando una base de datos con certificado autofirmado
      },
    },
  });
  
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