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
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ForumIcon from '@mui/icons-material/Forum';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { btnStyle } from "../styles/globalStyle";




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
      sx={{  backgroundColor: "primary.second" ,padding:5,borderRadius:3}}
    >
     
        {blogs.map((blog) => (
          
          <Card key={blog._id} component="div" sx={{display:"flex", flexDirection:{xs:"column",sm:"row"}, marginBottom:2,height:{xs:"350px",sm:"200px"},borderRadius:"1rem"}}>

            <CardMedia image={blog.image} sx={{height:{xs:"150px",sm:"100%"}, width:{sm:"250px"},padding:{xs:9,sm:5}}}/>

            <CardContent sx={{width:"100%",display:"inline-block",padding:3,marginBottom:3}}>
              <Typography variant="h6" component="h2">{blog.title} </Typography>
              <Typography variant="body2" sx={{height:"60px",overflow:"hidden",textOverflow:"ellipsis"}}>
                {blog.content} 
              </Typography>
                <Button sx={{color:"primary.main"}}>
                  <MoreHorizIcon/>
                </Button>
              

              <CardActions sx={{justifyContent:"center"}}>
                <Button sx={btnStyle}><FavoriteBorderIcon/></Button>
                <Button sx={btnStyle}><ForumIcon/></Button>
                <Button sx={btnStyle}><VisibilityIcon/>{blog.countOfVisitors}</Button>
              </CardActions>
            </CardContent>
          </Card>

        
          
        ))}
        <Stack spacing={2} sx={{margin:"auto"}}>
      <Pagination count={10} color="warning"/>
     
    </Stack>
    </Container>
  );
};

export default BlogList;
