export const read = (req,res)=>{
    res.send("Node is working")
}

export const insert = (req,res)=>{
    const {userName,Password} = req.body
    res.send(`Data Received Succesfully ${userName}`)
}