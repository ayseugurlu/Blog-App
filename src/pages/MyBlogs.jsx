import {
  Box,
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
import React from "react";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForumIcon from "@mui/icons-material/Forum";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { btnStyle } from "../styles/globalStyle";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";
import { useNavigate } from "react-router-dom";

const MyBlogs = () => {
  const { myBlogs } = useSelector((state) => state.blog);

  const { currentUser } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  console.log(currentUser);

  console.log(myBlogs);

  const { getMyBlogData } = useBlogCall();

  useEffect(() => {
    getMyBlogData(`blogs/?author=${currentUser?._id}`);
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "primary.contrastText", padding: 5, borderRadius: 3,height:"100vh" }}
    >
      {myBlogs?.map((blog) => (
        <Card
          key={blog._id}
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            marginBottom: 3,
            height: { sm: "260px" },
            borderRadius: "1rem",
            boxShadow: "2px 2px 10px black",
            backgroundColor:"#f7f2e9"
          }}
        >
          <CardMedia
            image={blog.image}
            sx={{
              height: { xs: "200px", sm: "400px" },
              width: "100%",
              maxWidth:"400",
              objectFit: "contain",
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

            <CardActions
              sx={{
                flexDirection: { xs: "column"},
                justifyContent: { xs: "center", md: "space-around" },
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 4,
                  mt: 3,
                  gap: 2,
                }}
              >
                <Fab size="small" variant="extended" sx={btnStyle}>
                  {blog.likes.includes(currentUser._id) ? (<FavoriteOutlinedIcon/>) : (<FavoriteBorderIcon />)}
                  
                  {blog.likes.length}
                </Fab>

                <Fab size="small" variant="extended" sx={btnStyle}>
                  <ForumIcon />
                  {blog.comments.length}
                </Fab>

                <Fab size="small" variant="extended" sx={btnStyle}>
                  <VisibilityIcon />
                  {blog.countOfVisitors}
                </Fab>
              </Box>

              <Button
                variant="contained"
                component="div"
                size="small"
                color="primary"
                endIcon={<ReadMoreRoundedIcon />}
                onClick={() => navigate(`/detail/${blog._id}`)}
              >
                Read More
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
      
    </Container>
  );
};

export default MyBlogs;
