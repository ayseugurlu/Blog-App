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
  Fab,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForumIcon from "@mui/icons-material/Forum";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { btnStyle } from "../styles/globalStyle";
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const limit = 3

const BlogList = () => {
  const { getBlogData} = useBlogCall();
  const {  blogs } = useSelector((state) => state.blog);
  const {currentUser} = useSelector(state => state.auth)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const naviagte = useNavigate()
 

const [page, setPage] = useState(1)



const handlePageChange = (event,value) => {
  setPage(value)

}

  console.log(blogs);
console.log(page);


  let pagiCount =Math.ceil(Number(blogs?.details?.totalRecords)/limit) || 0 ;

 

  

  useEffect(() => {
    getBlogData("blogs",page);
   
  }, [page]);

  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: "secondary.contrastText", padding: 5, borderRadius: 3 }}
    >
      {blogs?.data?.map((blog) => (
        <Card
          key={blog._id}
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginBottom: 3,
            borderRadius: "1rem",
            boxShadow:"2px 2px 10px black",
            backgroundColor:"#f7f2e9"
          }}
        >
          <CardMedia
            image={blog?.image}
            component="img"
            sx={{
              height: { xs: "200px", sm: "400px" },
              width: "100%",
              objectFit:"contain",
              maxWidth:"400px",
              padding: { xs: 9, md: 5 },
              
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
              {blog?.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                height: "60px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {blog?.content}
            </Typography>
          

            <CardActions sx={{flexDirection:{xs:"column"}, justifyContent:{xs:"center", md:"space-around"}, mb:3 }}>
            <Box sx={{ display:"flex",justifyContent: "center", mb:4,mt:3,gap:2 }}>
            <Fab
                size="small"
                variant="extended"
                sx={btnStyle}
              >  {blog?.likes?.includes(currentUser?._id) ? (<FavoriteOutlinedIcon/>) : (<FavoriteBorderIcon />)}
                {blog?.likes?.length}
              </Fab>

              <Fab
                size="small"
                variant="extended"
                sx={btnStyle}
                onClick={handleOpen}
              >
                <ForumIcon />
                {blog?.comments?.length}
              </Fab>
             
              

              <Fab size="small" variant="extended" sx={btnStyle}>
                <VisibilityIcon />
                {blog?.countOfVisitors}
              </Fab>
            </Box>
              

              <Button variant="contained" component="div" size="medium" color="primary" endIcon={<ReadMoreRoundedIcon/>}
            onClick={()=>naviagte(`/detail/${blog?._id}`)}
            >
               Read More
            </Button>
            </CardActions>

          
          </CardContent>

          
        </Card>
      ))}
      <Stack spacing={2} sx={{  display: "flex", 
    justifyContent: "center", 
    alignItems: "center",  }}>
        <Pagination count={pagiCount} page={page} onChange={handlePageChange} color="primary" />
      </Stack>
    </Container>
  );
};

export default BlogList;
