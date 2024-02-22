const { url} = require("../../../db")

const getUrl = async()=>{
    let URLs = await url.findAll()
    return URLs
}

module.exports = {getUrl}