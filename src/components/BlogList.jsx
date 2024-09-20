import React from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Fab,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForumIcon from "@mui/icons-material/Forum";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { btnStyle } from "../styles/globalStyle";
import CommentModal from "./Modals/CommentModal";
import { useState } from "react";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const BlogList = () => {
  const { getBlogData, addRemoveLike, getSingleData, getLike } = useBlogCall();
  const { singleBlog, blogs, like } = useSelector((state) => state.blog);


  console.log(like);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLike = (id) => {
    getLike(id);
  };

  console.log(blogs);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "primary.second", padding: 5, borderRadius: 3 }}
    >
      {blogs.map((blog) => (
        <Card
          key={blog._id}
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            marginBottom: 2,
            height: { xs: "380px", sm: "250px" },
            borderRadius: "1rem",
          }}
        >
          <CardMedia
            image={blog.image}
            sx={{
              height: { xs: "150px", sm: "100%" },
              width: { sm: "250px" },
              padding: { xs: 9, sm: 5 },
            }}
          />

          <CardContent
            sx={{
              width: "100%",
              display: "inline-block",
              padding: 3,
              marginBottom: 3,
            }}
          >
            <Typography variant="h6" component="h2">
              {blog.title}{" "}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                height: "60px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {blog.content}
            </Typography>
            <Button sx={{ color: "primary.main" }}>
              <MoreHorizIcon />
            </Button>

            <CardActions sx={{ justifyContent: "center", mb: 10 }}>
              <Fab
                size="small"
                variant="extended"
                onClick={(e) => {
                  addRemoveLike(blog._id);
                  handleLike(blog._id);
                }}
                sx={btnStyle}
              >
                {like ? (
                  <FavoriteOutlinedIcon />
                ) : (
                  <FavoriteBorderIcon />
                )}
                {blog.likes.length}
              </Fab>

              <Fab
                size="small"
                variant="extended"
                sx={btnStyle}
                onClick={handleOpen}
              >
                <ForumIcon />
                {blog.comments.length}{" "}
                <CommentModal
                  handleClose={handleClose}
                  open={open}
                  myblogId={blog._id}
                />
              </Fab>

              <Fab size="small" variant="extended" sx={btnStyle}>
                <VisibilityIcon />
                {blog.countOfVisitors}
              </Fab>
            </CardActions>
          </CardContent>
        </Card>
      ))}
      <Stack spacing={2} sx={{ margin: "auto" }}>
        <Pagination count={10} color="warning" />
      </Stack>
    </Container>
  );
};

export default BlogList;
