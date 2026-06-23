import express from "express"
import { log } from "node:console"
import router from "./Router/router.js"

const app = express()

const PORT = 3250
app.use(express.json())

app.use("/api",router)
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})