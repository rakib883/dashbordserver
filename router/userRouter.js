import express from "express"
import register from "../contrloer/register.js"
import login from "../contrloer/login.js"

const user = express.Router()

user.post("/user/register",register)
user.post("/user/login",login)

export default user