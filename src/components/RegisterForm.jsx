
import { Form } from 'formik';
import React from 'react'
import * as Yup from "yup";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, Container, InputAdornment, TextField } from '@mui/material';

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Bu alan zorunludur!")
    .min(3, "Username en az 3 karakter olmalıdır!"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/\d+/, "Digit karakter içermelidir!")
    .matches(/[a-z]/, "Küçük harf içermelidir!")
    .matches(/[A-Z]/, "Büyük harf içermelidir!")
    .matches(/[@$?!%&*]+/, "Özel karakter içermelidir(@$?!%&*)")
});

const RegisterForm = ({
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
          name="username"
          label="Username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur} 
          helperText={touched.username && errors.username} 
          error={touched.username && Boolean(errors.username)} 
        />
        <TextField
          label="First Name"
          name="firstName"
          type="text"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.firstName && errors.firstName}
          error={touched.firstName && Boolean(errors.firstName)}
        />
        <TextField
          label="Last Name"
          name="lastName"
          type="text"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.lastName && errors.lastName}
          error={touched.lastName && Boolean(errors.lastName)}
        />
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
          label="Image"
          name="image"
          type="text"
          variant="outlined"
          value={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.image && errors.image}
          error={touched.image && Boolean(errors.image)}
        />
         <TextField
          label="Bio"
          name="bio"
          type="text"
          variant="outlined"
          value={values.bio}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.bio && errors.bio}
          error={touched.bio && Boolean(errors.bio)}
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
          {isSubmitting ? "Loading..." : "Sign Up"}
        </Button>
      </Box>
    </Form>
  </Container>
  )
}

export default RegisterForm