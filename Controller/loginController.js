// npm i jsonwebtoken
// npm i bcrypyjs
import bcrypt from "bcryptjs"
import User from "../Schema/model.js"
import jwt from "jsonwebtoken"
export const registerUser = async(req,res)=>{
    try{
        const {username,Password,email,Mobile} = req.body
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(404).json({error:"User Already exist"})
        }
        else{
            const Salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(Password,Salt)
            const insertNewUser = await User({username:username,Password:hashedPassword,email:email,Mobile:Mobile}).save()
            res.status(200).json({message:"Regitered user Successfully",data:insertNewUser})
        }
    }catch(err){
        res.status(405).json({message:"Unable to Regiter the user",error:err})
    }
}

export const loginUser = async(req,res)=>{
    try{
        const {email,Password} =req.body
        const existingUser = await User.findOne({email})
        if(!existingUser){
            res.status(404).json({message:"Invalid userName or Password"})
        }
        else{
            const matchPass = await bcrypt.compare(Password,existingUser.Password)
            if(!matchPass){
                res.status(404).json({message:"Invalid Password"})
            }else{
                const token = jwt.sign({email},"abcdef",{expiresIn:"1m"})
                res.status(201).json({message:"Login Succesfully",token:token})
            }
        }
    }catch(err){
        res.status(405).json({message:"Login Error"})
    }
}

export const verifyToken = (req,res,next)=>{
    try{
        const auth = req.headers["authorization"]
        if(!auth){
            res.status(404).json({message:"No token Provided"})
        }
        else{
            const token = auth.split(" ")[1];
            const decode = jwt.verify(token,"abcdef")
            req.user = decode
            next()
        }
    }catch(err){
        res.status(402).json({message:"Invaild token Provided"})
    }
}