import express from "express"
import router from "./Router/router.js"
import db from "./Config/db.js"

const app = express()

const PORT = 3250
app.use(express.json())

db("mongodb://127.0.0.1:27017/Newone")
app.use("/api",router)
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})