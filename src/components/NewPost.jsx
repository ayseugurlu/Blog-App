import * as React from "react";
import Box from "@mui/material/Box";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Form, Formik } from "formik";
import {
  TextField,
  FormControl,
  MenuItem,
  Typography,
  Grid2,
  Container,
  Toolbar,
  Button,
} from "@mui/material";
import useBlogCall from "../hooks/useBlogCall";
import { newPostStyle } from "../styles/globalStyle";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NewCategoryModal from "./Modals/NewCategoryModal";


const icons = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function NewPost() {
  const { postBlogData, getBlogData } = useBlogCall();
  const { categories } = useSelector((state) => state.blog);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getBlogData("categories");
  }, []);

  console.log(categories);

  return (
    <Container maxWidth="lg" sx={{
      backgroundColor: "primary.main",
      color: "secondary.contrastText",
      p: 4,
      borderRadius: 5,
      boxShadow: "4px 4px  20px black",
    }}>
      <Grid2 container>
        <Grid2
          size={{ xs: 12 }}
          
        >
          <Typography align="center" mb={2} variant="h5" component="h2">
            New Post
          </Typography>
          <Formik
            initialValues={{
              categoryId: "",
              title: "",
              content: "",
              image: "",
              isPublish: true,
            }}
            onSubmit={(values, actions) => {
              console.log(values);
              postBlogData("blogs", values);
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
              <Form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    height: 320,
                    transform: "translateZ(0px)",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <TextField
                    label="Title"
                    name="title"
                    type="text"
                    variant="outlined"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.title && errors.title}
                    error={touched.title && Boolean(errors.title)}
                    fullWidth
                    color="secondary"
                    sx={newPostStyle}
                  />
                  <TextField
                    label="Image URL"
                    name="image"
                    type="text"
                    variant="outlined"
                    value={values.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.image && errors.image}
                    error={touched.image && Boolean(errors.image)}
                    fullWidth
                    color="secondary"
                    sx={newPostStyle}
                  />
                  <FormControl fullWidth>
                    <TextField
                      select
                      id="demo-simple-select"
                      value={values.categoryId}
                      name="categoryId"
                      label="Category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.categoryId && errors.categoryId}
                      error={touched.categoryId && Boolean(errors.categoryId)}
                      color="secondary"
                      sx={newPostStyle}
                    >
                      {categories?.data?.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>

                  <TextField
                    label="Content"
                    name="content"
                    type="text"
                    variant="outlined"
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.content && errors.content}
                    error={touched.content && Boolean(errors.content)}
                    multiline
                    rows={4}
                    fullWidth
                    color="secondary"
                    sx={newPostStyle}
                  />

                  <Button
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Toolbar />
        </Grid2>
        <Grid2 size={{ xs: 12 }} sx={{ textAlign: "center", mt: 10 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, mb: 1 }}
          >
            Can't find the category you want? Add a new one
          </Typography>
          <Button variant="contained" onClick={handleOpen}>
            Add New Category
          </Button>
          <NewCategoryModal open={open} handleClose={handleClose} />
        </Grid2>
      </Grid2>
    </Container>
  );
}
