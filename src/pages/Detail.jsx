import { Card, CardActions, CardMedia, Container, Fab, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { btnStyle } from "../styles/globalStyle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ForumIcon from "@mui/icons-material/Forum";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentModal from "../components/Modals/CommentModal";
import { FavoriteBorderOutlined } from "@mui/icons-material";


const Detail = () => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { singleBlog} = useSelector((state) => state.blog);
  const {currentUser} = useSelector((state) => state.auth)
  const { getSingleData ,addRemoveLike } = useBlogCall();

  console.log(currentUser);

  useEffect(() => {
    getSingleData("blogs", id);
    
  }, []);

  console.log(singleBlog);
  return (
    <Container maxWidth="md">
      <Card sx={{ padding: 5 }}>
        <Typography variant="h4" align="center" mb={3}>
          {singleBlog.title}
        </Typography>

        <CardMedia component="img" src={singleBlog.image} />

        <Typography variant="body1" color="primary.contrastText" mt={3}>
          Category : {singleBlog?.categoryId?.name}
        </Typography>
        <Typography variant="body1">{singleBlog.content}</Typography>
        <Typography variant="body1" color="green">
          
          Date:
          {new Date(singleBlog?.categoryId?.createdAt).toLocaleDateString(
            "de-DE",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          )}
        </Typography>

        <CardActions sx={{ justifyContent: "center", mb: 10 }}>
              <Fab
                size="small"
                variant="extended"
                onClick={(e) => {
                  addRemoveLike(singleBlog._id);
                }}
                sx={btnStyle}
              >
                {singleBlog?.likes?.includes(currentUser._id) ? (<FavoriteBorderOutlined/>) : (<FavoriteBorderIcon/>)}
                  
            
                {singleBlog?.likes?.length}
              </Fab>

              <Fab
                size="small"
                variant="extended"
                sx={btnStyle}
                onClick={handleOpen}
              >
                <ForumIcon />
                {singleBlog?.comments?.length}
              </Fab>
              {open && (<CommentModal
                  handleClose={handleClose}
                  open={open}
                  {...singleBlog}
                />)}
              

              <Fab size="small" variant="extended" sx={btnStyle}>
                <VisibilityIcon />
                {singleBlog.countOfVisitors}
              </Fab>
            </CardActions>
      </Card>
    </Container>
  );
};

export default Detail;
