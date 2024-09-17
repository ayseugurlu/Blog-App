import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { Form, Formik } from "formik";
import { TextField } from "@mui/material";
import useBlogCall from "../hooks/useBlogCall";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function NewPost() {
  const { postBlogData } = useBlogCall();
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Formik
        initialValues={{
          categoryId: "",
          title: "",
          content: "",
          image: "",
          isPublish: "",
        }}
        onSubmit={(values, actions) => {
          // same shape as initial values
          console.log(values);
          postBlogData(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        <Form>
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
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.categoryId}
              name="categoryId"
              label="Category"
              onChange={handleChange}
            >
              {[].map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={info.categoryId}
              name="categoryId"
              label="Category"
              onChange={handleChange}
            >
              {[].map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
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
          />
        </Form>
      </Formik>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
