import React from 'react'
import { useForm } from 'react-hook-form';
import '../App.css'
import { useLocation,useNavigate } from 'react-router-dom';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
  Paper
} from '@mui/material';
import axios from 'axios';
function VerifyOtp(){
    const navigate =useNavigate()
    const location = useLocation()
    const {register,handleSubmit,formState} = useForm()
    const {errors} =formState
    let email = location.state?.email
    console.log("mail recieved",email)
    const onSubmit= async (data)=>{
         data.email= email
          console.log("Data going to submit",data)
         try{
            const response = await axios.post('http://localhost:5000/auth/verifyotp',data);
            console.log(response);
            if(response.data.success){
                console.log(response.data.message)
                navigate('/successPage')
            }else{
                   console.log(response.data.message)
            }
         }catch(err){
             console.log("error",err.response.data.message)

         }
    }

    return(
        <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          OTP VERIFICATION
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="otp"
            label="OTP"
            type="text"
            id="otp"
            autoComplete="otp"
            {...register('otp',{required:'OTP is required'})}
          />
           {errors.password?.message && <p className='waring-text'>{errors.password.message}</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Verify OTP
          </Button>
        </Box>
      </Paper>
    </Container>
    )
}
export default VerifyOtp 
