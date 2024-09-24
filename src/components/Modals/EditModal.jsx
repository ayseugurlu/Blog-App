import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, Container, InputAdornment, List, ListItem, TextField } from "@mui/material";
import { Form, Formik } from "formik";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { SignupSchema } from "../RegisterForm";
import { useSelector } from "react-redux";
import useAuthCall from "../../hooks/useAuthCall";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { newPostStyle } from "../../styles/globalStyle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "500px",
  bgcolor: "primary.main",
  boxShadow: 24,
  overflow: "auto",
  p: 4,
  borderRadius: 5,
  color: "secondary.contrastText",
  "&::-webkit-scrollbar": {
    width: "2px",
  },
};

export default function EditModal({ open, handleClose }) {

    const {currentUser} =useSelector(state=> state.auth)

    const {updateProfile} = useAuthCall()

    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            size="small"
            variant=""
            onClick={handleClose}
            sx={{ marginLeft: "300px" }}
          >
            <HighlightOffOutlinedIcon />
          </Button>
          <Typography id="modal-modal-title" variant="h5" component="h2" mb={3}>
            My Profile
          </Typography>

          <Formik
            initialValues={{
              username: currentUser?.username || "",
              firstName: currentUser?.firstName || "",
              lastName: currentUser?.lastName || "",
              email:currentUser?.email || "",
              password: "",
              image: currentUser?.image || "",
              city: currentUser?.city || "",
              bio: currentUser?.bio || "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              updateProfile(currentUser._id,values);
              handleClose()
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >

{({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
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
                  sx={newPostStyle}
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
                  sx={newPostStyle}
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
                  sx={newPostStyle}
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
                  sx={newPostStyle}
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
                  sx={newPostStyle}
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
                  sx={newPostStyle}
                />
                <TextField
                  label="City"
                  name="city"
                  type="text"
                  variant="outlined"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.city && errors.city}
                  error={touched.city && Boolean(errors.city)}
                  sx={newPostStyle}
                />
                <TextField
                  label="Password"
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{ cursor: "pointer" }}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
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
                  sx={newPostStyle}
                />

                <Button
                  type="submit"
                  variant="contained"
                >
                  {isSubmitting ? "Loading..." : "Save Profile"}
                </Button>
              </Box>
            </Form>
              )}
          </Formik>
        </Box>
      </Modal>
    </Container>
  );
}
