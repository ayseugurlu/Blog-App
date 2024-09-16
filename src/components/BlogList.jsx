import React from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const BlogList = () => {
  const { getBlogData } = useBlogCall();
  const { blogs } = useSelector((state) => state.blog);

  console.log(blogs);

  useEffect(() => {
    getBlogData("blogs");
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{ marginLeft: "10rem", backgroundColor: "primary.second" }}
    >
      <Typography>Blogs</Typography>

      <Box>
        {blogs.map((blog) => (
          <Card  sx={{ display: "flex" }}>
            <CardMedia
              sx={{  }}
              image={blog.image}
              title={blog.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blog.title}
              </Typography>
              <Typography variant="body2" sx={{width:"200px",height:"50px", color: "text.secondary" ,overflow:"hidden"}}>
                {blog.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default BlogList;
