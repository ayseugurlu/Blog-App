import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, List, ListItem, TextField } from "@mui/material";
import { useEffect } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { Form, Formik } from "formik";
import { newPostStyle } from "../../styles/globalStyle";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "primary.main",
  boxShadow: 24,
  overFlow: "scroll",
  p: 4,
  borderRadius: 5,
  color: "secondary.contrastText",
};

export default function CommentModal({
  open,
  handleClose,
  comments,
  userId,
  createdAt,
  blogId
}) {
 
  const { postBlogData, getSingleData } = useBlogCall();

  useEffect(() => {
    getSingleData("comments", blogId);
  }, []);

  return (
    <div>
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
            sx={{ marginLeft: "300px"}}
          >
            <HighlightOffOutlinedIcon />
          </Button>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Comments
          </Typography>
          <List>
            {comments?.map((comment) => (
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  bgcolor: "primary.second",
                  mb: 3,
                  borderRadius: 5,
                
                }}
              >
                <Typography
                  variant="h6"
                  color="primary.contrastText"
                >
                  <AccountCircleTwoToneIcon sx={{mr:1}}/>
                  {userId.username} 
                 
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.main"
                  component="div"
                  mb={2}
                >
                  {new Date(createdAt).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                 
                </Typography>
                <Typography variant="body2" component="p" color="primary.main" >
                  {comment.comment}
                </Typography>
              </ListItem>
            ))}
          </List>

          <Box>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              mb={2}
            >
              New Category
            </Typography>
            <Formik
              initialValues={{
                blogId: blogId,
                comment: "",
              }}
              onSubmit={(values, actions) => {
                console.log(values);
                postBlogData("comments", values);
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
                      label="Your Comment"
                      name="comment"
                      type="text"
                      variant="outlined"
                      value={values.comment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.comment && errors.comment}
                      error={touched.comment && Boolean(errors.comment)}
                      fullWidth
                      color="secondary"
                      multiline
                      rows={4}
                      sx={{
                        ...newPostStyle,
                        "& .MuiInputBase-input": {
                          color: "black", // İçindeki yazının rengi
                        },
                      }}
                    />

                    <Button variant="contained" type="submit">
                      Send
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
