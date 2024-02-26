const { findUser } = require("../controller/getUserController")
const { createUser } = require("../controller/postUserController")

const getUser = async (req,res)=>{
    const {email, password} = req.body
    try {
        const userFound = await findUser(email,password)
        console.log(userFound)
        res.send(200).json(userFound)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



const postUser = async (req,res) =>{
    const userData = req.body
    try {
        const newUser = await createUser(userData)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {postUser, getUser}