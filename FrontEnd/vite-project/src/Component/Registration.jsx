import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../App.css'
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
  Paper
} from '@mui/material';
import axios from 'axios';
function Registration(){
    const navigate=useNavigate();
    const {register,handleSubmit,reset,formState} = useForm()
    const {errors,isValid} =formState
    const onSubmit= async (data)=>{
         console.log("Data going to submit",data)
         try{
            const response = await axios.post('http://localhost:5000/auth/register',data);
            console.log(response);
            if(response.data.success){
                console.log(response.message)
                navigate('/generateOtp',{state:data.email})
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
          Registartion Form
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
           {errors.email?.message && <p className='waring-text'>{errors.email.message}</p>}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password',{required:'Password is required'})}
          />
           {errors.password?.message && <p className='waring-text'>{errors.password.message}</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
             disabled={!isValid}
          >
            Register
          </Button>
          <Button
            type="reset"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={()=>{reset()}}
          >
            Reset
          </Button>
        </Box>
      </Paper>
    </Container>
    )
}
export default Registration 
