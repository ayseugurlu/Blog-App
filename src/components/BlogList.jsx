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
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const { getBlogData, addRemoveLike, getLike } = useBlogCall();
  const {  blogs, like } = useSelector((state) => state.blog);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const naviagte = useNavigate()
  const handleLike = (id) => {
    getLike(id);
  };

  // console.log(blogs);
  

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
            marginBottom: 3,
            height: { xs: "380px", sm: "250px" },
            borderRadius: "1rem",
            boxShadow:"2px 2px 10px black"
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
            <Button sx={{ color: "primary.main" }} endIcon={<MoreHorizIcon/>}
            onClick={()=>naviagte(`/detail/${blog._id}`)}
            >
               Read More
            </Button>

            <CardActions sx={{ justifyContent: "center", mb: 10 }}>
              <Fab
                size="small"
                variant="extended"
                sx={btnStyle}
              > <FavoriteBorderIcon/>
                {blog.likes.length}
              </Fab>

              <Fab
                size="small"
                variant="extended"
                sx={btnStyle}
                onClick={handleOpen}
              >
                <ForumIcon />
                {blog.comments.length}
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
