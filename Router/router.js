import express from "express"
import { insert, read } from "../Controller/crud.js"

const router = express.Router()

router.get("/",read)
router.post("/adduser",insert)

export default router