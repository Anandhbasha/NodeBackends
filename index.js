import express from "express"
import { log } from "node:console"

const app = express()

const PORT = 3250

app.get("/",(req,res)=>{
    res.send("Node is working")
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})