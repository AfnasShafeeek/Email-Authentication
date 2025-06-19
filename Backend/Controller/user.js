import userModel from "../model/user.js";
import crypto from 'crypto';
import sendOtp from '../Utils/sentmails.js'

const register = async (req,res)=>{
     console.log('Requesting data',req.body)
     const {email,password} = req.body

     try{
         const existingEmail= await userModel.findOne({email})

     if(existingEmail){
         res.status(400).json({message:'User Email Exist',success:false})
     }else{
         const newUser = new userModel({email,password})
         await newUser.save()
         res.status(201).json({message:'Register succesfully',success:true})
     }

        
     }catch(err){
        res.status(500).json({message:'Server Error',success:false})
     }

}
const generateOtp= async (req,res)=>{
      console.log('Requesting Body',req.body);
      const {email} = req.body;

    try{
        const userExist = await userModel.findOne({email})
      if(!userExist){
        res.status(400).json({message:'user does not exist',success:false})
      }else{
        const otp = crypto.randomInt(100000,999999).toString();
        console.log("generated otp",otp)
        userExist.otp=otp
        userExist.otpExpires = Date.now() + 10*60*1000;
        await userExist.save()

        await sendOtp(email,otp)

        res.status(201).json({
            message:"Otp generated successfully",
            success:true,
            otp:otp
        })
      }
    }catch(err){
        res.status(500).json({message:'Server Error',success:false})
     }
}

const validateOtp = async (req,res)=>{
  console.log('Requesting Body',req.body);
  const {email,otp} = req.body;
  try{
    const user = await userModel.findOne({email})

    if(!user){
      res.status(400).json({message:"User not found",success:false})
    }

    if(!user.otp){
      res.status(400).json({message:"Otp Not avialablable please generate it first",success:false})
    }
    
    if(user.otp !== otp || user.otpExpires < Date.now()){
      res.status(400).json({message:"Otp missmatch or Otp expaired",success:false})
    }

    user.otp = null;
    user.otpExpires = null;

    await user.save()

    res.status(200).json({message:"Otp verified successfully",success:true})

  }catch(err){
        res.status(500).json({message:'Server Error'})
     }
}

export { register, generateOtp, validateOtp };
