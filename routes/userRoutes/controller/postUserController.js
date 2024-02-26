const {user} = require("../../../db")

const createUser = async(userData)=>{
    let newUser = await user.create(userData)
    return newUser
}

module.exports = {createUser}