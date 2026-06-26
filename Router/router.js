import express from "express"
import { deleteUser, insertData, readData, updateUser } from "../Controller/crud.js"
import { loginUser, registerUser } from "../Controller/loginController.js"

const router = express.Router()

router.get("/",readData)
router.post("/addUser",insertData)
router.put("/modified/:email",updateUser)
router.delete("/remove/:Mobile",deleteUser)
router.post("/register",registerUser)
router.post("/login",loginUser)
// router.post("/adduser",insert)
// router.put("/updateUser/:email",update)
// router.delete("/deleteUser/:email",deleteUser)

export default router