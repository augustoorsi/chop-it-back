const {Router} = require("express")
const urlRouter = require("./urlRoutes/urlRouter")
const { userRouter } = require("./userRoutes/userRoutes")

const router = Router()

router.use("/", urlRouter)
router.use("/", userRouter)

module.exports = router