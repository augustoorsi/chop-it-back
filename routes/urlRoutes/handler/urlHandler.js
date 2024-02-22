const { getUrl } = require("../controller/getAllUrlController")
const { getChoppedURL } = require("../controller/getChoppedURLController")
const { createUrl } = require("../controller/postUrlController")


const getAllUrl = async (req,res)=>{
    try {
        const AllURL = await getUrl()
        res.status(200).json(AllURL)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getChoppedUrl = async (req,res) =>{
    let {choppedUrl}= req.params
    choppedUrl = "" + choppedUrl
    try {
        const data = await getChoppedURL(choppedUrl)
        console.log(data)
        res.status(200).send(data)
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const postUrl = async (req,res)=>{
    const {URL} = req.body
    try {
        const newURL = await createUrl(URL)
        res.status(200).json(newURL)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {postUrl, getAllUrl, getChoppedUrl}