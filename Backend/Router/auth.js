import express from 'express'
import {register,generateOtp,validateOtp} from '../Controller/user.js'

const router = express.Router()

//register
router.post('/register',register);

//otp generation
router.post('/generateOtp',generateOtp);

//otp verification
router.post('/verifyotp',validateOtp);


export default router;
