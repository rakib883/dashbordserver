import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{type:String,Required:true}, 
    lastName:{type:String,Required:true}, 
    email:{type:String,Required:true}, 
    password:{type:String,Required:true} 
})

const user = mongoose.model("Register",userSchema)

export default user