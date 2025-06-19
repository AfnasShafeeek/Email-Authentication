import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
    },
    tls: {
    rejectUnauthorized: false // Allows self-signed certificates
  }
})

const sendOtp = (email,otp)=>{
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to:email,
    subject:'Email for Authentication OTP',
    text:`Your OTP for authentication is ${otp}`
  }
   try{
      transporter.sendMail(mailOptions)
     console.log("Email Send Sucessfully")
   }catch(err){

    console.log('Error in Email',err);
    throw new Error('Something went wrong in Email sent')

   }

}

export default sendOtp ;