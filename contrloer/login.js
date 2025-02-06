import generateToken from "../config/token.js"
import user from "../model/user.js"

const login=async(req,res)=>{
     const {email,password} =  req.body
     try{
        const existingUser = await user.findOne({email})
        if(!existingUser){
            return res.status(400).json({message:"user not found"})
        }
        
        const passwordCheck = existingUser.password === password

        if(!passwordCheck){
           return res.status(400).json({message:"passwork or email incorrect"})
        }
        
        const token = generateToken(existingUser)

        if(existingUser || passwordCheck ){
            return res.status(200).json({message :"Login succesfully",token})
        }


     }catch(error){
        console.log(error)
     }
     console.log(email)
}

export default login