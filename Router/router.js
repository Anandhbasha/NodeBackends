import express from "express"
import { readData } from "../Controller/crud.js"

const router = express.Router()

router.get("/",readData)
// router.post("/adduser",insert)
// router.put("/updateUser/:email",update)
// router.delete("/deleteUser/:email",deleteUser)

export default router