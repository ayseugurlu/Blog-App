import { Box, Button, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { Form } from 'formik';
import React from 'react'
import * as Yup from "yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export const LoginSchema = Yup.object().shape({

  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "Digit karakter içermelidir!")
    .matches(/[a-z]/, "Küçük harf içermelidir!")
    .matches(/[A-Z]/, "Büyük harf içermelidir!")
    .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)")
});


const LoginForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
 
  return (
    <Container sx={{width:"30rem"}}>
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        
        <TextField
          label="Password"
          name="password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start"
              sx={{cursor:"pointer"}}
              aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end">
                {showPassword ? <VisibilityOff/> : <Visibility />}
              </InputAdornment>
            ),
          },
        }}
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />


        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
      </Box>
    </Form>
  </Container>
  )
}

export default LoginForm