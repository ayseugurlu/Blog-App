import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import { Formik } from 'formik'
import { NavLink } from 'react-router-dom'
import useAuthCall from '../hooks/useAuthCall'
import LoginForm, { LoginSchema } from '../components/LoginForm'

const Login = () => {
  const { login } = useAuthCall()
  return (
    <Container maxWidth="xl" sx={{height:"100vh"}}>

    <Grid2 
    container
    justifyContent="center"
    >

    <Grid2 size={{xs:12, sm:10 ,md:6}} >
    <Avatar
        sx={{
          backgroundColor: "secondary.main",
          m: "auto",
          width: 40,
          height: 40,
        }}
      >
        
      </Avatar>
      <Typography
        variant="h4"
        align="center"
        mb={3}
        mt={2}
        color="secondary.main"
      >
        Login
      </Typography>

      <Formik
      initialValues={{
          email: "",
          password: "",
          
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          login(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <LoginForm {...props} />}>

        </Formik>
      <Box sx={{ textAlign: "center", mt: 2}}>
        <NavLink style={{color:"gray", textDecoration:"none"}} to="/register">Don't have an account? Sign Up</NavLink>
      </Box>
    </Grid2>

    </Grid2>
</Container>
  )
}

export default Login