import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { Button, Fab, List, ListItem, TextField } from "@mui/material";
import { useEffect } from "react";
import useBlogCall from "../../hooks/useBlogCall";

import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import { Form, Formik } from "formik";
import { newPostStyle } from "../../styles/globalStyle";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "400px",
  bgcolor: "#EEF4F3",
  border: "2px solid #000",
  boxShadow: 24,
  overFlow: "scroll",
  p: 4,
  borderRadius: 5,
  color: "black",
};

export default function CommentModal({ open, handleClose, myblogId }) {
  const { comments } = useSelector((state) => state.blog);
  const { getDataWithToken,postBlogData } = useBlogCall();


  console.log(comments);

  useEffect(() => {
    getDataWithToken("comments");
  }, []);

  const filteredComment = comments.filter((comment) => comment._id == myblogId) 

//   console.log(filteredComment);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Fab onClick={handleClose} sx={{marginLeft:"auto",color:"red"}}><HighlightOffOutlinedIcon/></Fab>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Comments
          </Typography>
          <List>
            {
              filteredComment.map((comment) => (
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
                    component="div"
                  >
                    <AccountCircleTwoToneIcon />
                    {comment.userId.username}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {comment.comment}
                  </Typography>
                </ListItem>
              ))}
          </List>

          <Box sx={style}>
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
                blogId: myblogId ,
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
