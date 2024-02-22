const express = require("express")
const morgan = require("morgan")
const {sequelize} = require('./db')
const cors= require("cors")
const router = require("./routes/router")
require('dotenv').config()

const server = express()
const PORT = process.env.PORTBACK || 3001

server.use(cors())
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://chop-it.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
server.use(morgan("dev"));
server.use(express.json());
server.use(router)



server.listen(PORT,()=>{
    console.log("funca")
    sequelize.sync({ force: true }) // Cambia a `true` si quieres que las tablas se recreen cada vez que se inicie la aplicación
    .then(() => {
        console.log('Database synced successfully');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });
})

module.exports = server