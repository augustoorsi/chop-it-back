const {Router} = require("express")
const urlRouter = require("./urlRoutes/urlRouter")
const { userRouter } = require("./userRoutes/userRoutes")

const router = Router()

router.use("/url", urlRouter)
router.use("/user", userRouter)

module.exports = router