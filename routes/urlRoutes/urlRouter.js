const {Router} = require("express")
const {postUrl, getAllUrl, getChoppedUrl} = require("./handler/urlHandler")

const urlRouter = Router()

urlRouter.post("/", postUrl)
urlRouter.get("/:choppedUrl", getChoppedUrl)
urlRouter.get("/", getAllUrl)



module.exports = urlRouter
