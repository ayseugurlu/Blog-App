import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Fab,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import EditModal from "../components/Modals/EditModal";
import { useNavigate } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForumIcon from "@mui/icons-material/Forum";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { btnStyle } from "../styles/globalStyle";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ReadMoreRoundedIcon from "@mui/icons-material/ReadMoreRounded";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useAuthCall from "../hooks/useAuthCall";

const Profile = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { currentUser } = useSelector((state) => state.auth);
  const [show,setShow] =useState(false)

  const {blogs} =useSelector(state=> state.blog)

  const {getBlogData} =useBlogCall()
  const {deleteUserData} = useAuthCall()

  console.log(blogs);

  const myFavBlogs = blogs.filter((blog) => blog?.likes.includes(currentUser._id))

  console.log(myFavBlogs);

  const navigate = useNavigate()
  return (
    <Container maxWidth="xl">
      <Card sx={{ textAlign:"center",padding:5 ,bgcolor:"primary.main",color:"secondary.contrastText",borderRadius:5}}>

     
        <Avatar alt={currentUser.firstName} sx={{bgcolor:"primary.contrastText",margin:"auto",width: 100, height: 100 }} src={currentUser.image} />

        
          <Typography>Username : {currentUser.username}</Typography>
          <Typography> Name :  
            {currentUser.firstName} {currentUser.lastName}
          </Typography>
          <Typography>City : {currentUser.city}</Typography>
          <Typography mb={4}>Email : {currentUser.email}</Typography>

          <Button variant="contained" color="warning" fullWidth onClick={handleOpen} ><ModeEditOutlineRoundedIcon/> Edit your Profile</Button>

          <Button variant="contained" color="error" 
      onClick={deleteUserData}
      sx={{mt:3}}><DeleteForeverIcon/> Delete my Account <DeleteForeverIcon/> </Button>
        
      </Card>

      {open && <EditModal handleClose={handleClose} open={open}/>}


      <Button variant="contained" color="success" fullWidth sx={{mt:3}} onClick={()=>navigate("/myblogs")}>My Blogs</Button>
      <Button variant="contained"  fullWidth sx={{mt:3,bgcolor:"#BA55D3",color:"white"}}
      onClick={()=>{setShow(!show);getBlogData("blogs")}}
      >My Favorite Blogs</Button>

      <Box sx={{mt:3}}>

      {show && myFavBlogs?.map((blog)=> (
        <Card
          key={blog._id}
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            marginBottom: 3,
            height: { sm: "300px" },
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
      
      </Box>

      
    </Container>
  );
};

export default Profile;
