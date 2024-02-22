const {Router} = require("express")
const urlRouter = require("./urlRoutes/urlRouter")

const router = Router()

router.use("/", urlRouter)

module.exports = router