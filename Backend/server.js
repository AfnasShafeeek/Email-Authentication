//This will be entry point 
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import appRoute from './Router/auth.js'

dotenv.config();      //confiquring environment
const app = express();    // initializing express require step

app.use(express.json())   // this middleware is used becuase we are communicating with frontend in json format
app.use(cors())           // used to connect if our frontend and backend is in 2 end points

app.use('/auth',appRoute)


//DB connection

const connectDB =async ()=>{
      await mongoose.connect(process.env.MONGO_URL)
      console.log("Data base connected")
}

connectDB();

app.listen(5000,()=>{
     console.log("Server Started")
})
