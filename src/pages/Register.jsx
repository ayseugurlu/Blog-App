import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import RegisterForm, { SignupSchema } from '../components/RegisterForm'
import { Formik } from 'formik'
import useAuthCall from '../hooks/useAuthCall'
import { NavLink } from 'react-router-dom'

const Register = () => {

  const {register} = useAuthCall()
  return (
    <Container maxWidth="xl" sx={{height:"100vh"}}>

        <Grid2 
        container
        justifyContent="center"
        >

        <Grid2  size={{xs:12, sm:10 ,md:6}}>
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
            Sign Up
          </Typography>

          <Formik
          initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              image:"",
              city:"",
              bio:""
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}>

            </Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "" }}>
            <NavLink style={{color:"gray", textDecoration:"none"}} to="/login">Already have an account? Login</NavLink>
          </Box>
        </Grid2>

        </Grid2>
    </Container>
  )
}

export default Register