// export const read = (req,res)=>{
//     res.send("Node is working")
// }

import User from "../Schema/model.js"

// export const insert = (req,res)=>{
//     const {userName,Password} = req.body
//     res.send(`Data Received Succesfully ${userName}`)
// }

// export const update = (req,res)=>{
//     const email = req.params
//     const {password} = req.body
//     res.send(`Data Updated succesfully ${password}`)
// }

// export const deleteUser = (req,res)=>{
//     const email = req.params
//     res.send(`Data Deleted succesfully`)
// }


export const readData = async(req,res)=>{
    try{
        const read = await User.find()
        res.status(200).json({message:"Read Data",data:read})
    }catch(err){
        res.status.json({error:err})
    }
}

export const insertData = async(req,res)=>{
    try{
        const {username,Password,email,Mobile} = req.body
        const existingUser = await User.findOne({
            email
        })
        if(existingUser){
            res.status(405).json({message:"user Already exits"})
        }
        else{
            const insertNew = await User({username,Password,email,Mobile}).save()
        res.status(202).json({message:"Data added successfully",data:insertNew})
        }

    }catch(err){
        res.status(403).json({message:"unable to add data",error:err})
    }
}

export const updateUser = async(req,res)=>{
    try{
        const {Mobile,Password} = req.body
        const {email} = req.params
        const updateData = await User.findOneAndUpdate({email},{$set:{Mobile,Password}}) 
        if(!updateData){
            res.status(404).json({error:"unable to update the user"})
        }
        else{
            res.status(200).json({message:`${email} Updated Succesfully`})
        }
    }catch(err){
        res.status(407).json({error:"user not exists"})
    }
}


export const deleteUser = async(req,res)=>{
    try{
        const {Mobile} = req.params
        const deleteData = await User.findOneAndDelete({Mobile}) 
        if(!deleteData){
            res.status(404).json({error:"user not exists"})
        }
        else{
            res.status(200).json({message:`${Mobile} deleted Succesfully`})
        }
    }catch(err){
        res.status(407).json({error:"Unable to delete the user"})
    }
}