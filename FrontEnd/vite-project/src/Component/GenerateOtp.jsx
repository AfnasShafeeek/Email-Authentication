import React from 'react'
import '../App.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
  Paper
} from '@mui/material';
import axios from 'axios';
function GenerateOtp(){
    const navigate = useNavigate()
    const {register,handleSubmit,formState} = useForm()
    const {errors,isDirty,isValid} = formState
    const onSubmit= async (data)=>{
         console.log("Data going to submit",data)
         try{
            const response = await axios.post('http://localhost:5000/auth/generateOtp',data);
            console.log(response);
            if(response.data.success){
                console.log(response.message)
                const{email}=data
                navigate('/verifyOtp',{state:{email}})
            }else{
                   console.log(response.message)
            }
         }catch(err){
             console.log("error",err)
         }
    }

    return(
        <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography component="h1" variant="h5" align="center">
          OTP GENERATION
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register('email',{ 
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email?.message && <p className='waring-texts'>{errors.email.message}</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isDirty || !isValid}
          >
            Generate Otp
          </Button>
        </Box>
      </Paper>
    </Container>
    )
}
export default GenerateOtp