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