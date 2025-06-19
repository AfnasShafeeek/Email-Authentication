import mongoose from "mongoose";

const userSchema= new mongoose.Schema(                         //creating Schema for user
    {
        email:{type:'String',unique:true , required:true},
        password:{type:'String', required:true},
        otp:{type:'String'},
        otpExpires:{type:'Date'}
    }
)
const userModel = mongoose.model('User',userSchema)      //creating model of user schema    here user is model name 

export default userModel;