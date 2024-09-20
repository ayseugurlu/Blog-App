import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Form, Formik } from "formik";
import { newPostStyle } from "../styles/globalStyle";
import useBlogCall from "../hooks/useBlogCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "primary.main",
  color: "secondary.contrastText",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewCategoryModal({ open, handleClose }) {

    const {postBlogData}=useBlogCall()
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
            New Category
          </Typography>
          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={(values, actions) => {
              
              console.log(values);
              postBlogData("categories", values); 
              actions.resetForm();
              actions.setSubmitting(false);
              handleClose();
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
              <Form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    transform: "translateZ(0px)",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <TextField
                    label="Category Name"
                    name="name"
                    type="text"
                    variant="outlined"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.name && errors.name}
                    error={touched.name && Boolean(errors.name)}
                    fullWidth
                    color="secondary"
                    sx={newPostStyle}
                  />

                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
