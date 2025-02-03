import express from "express"
import register from "../contrloer/register.js"

const user = express.Router()

user.post("/user/register",register)

export default user