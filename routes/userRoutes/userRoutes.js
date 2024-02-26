const {Router} = require("express")
const { postUser, getUser } = require("./handler/UserHandler")


const userRouter = Router()

userRouter.post("/", postUser)
userRouter.get("/", getUser)


module.exports = {userRouter}