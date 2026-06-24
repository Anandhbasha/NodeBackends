import mongoose, { model } from "mongoose";

const crudModel = new mongoose.Schema({
    username:String,
    Password:String,
    email:String,
    Mobile:Number
})

const User = mongoose.model("Users",crudModel,"NewTable")

export default User