import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import EditModal from "../components/Modals/EditModal";

const Profile = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { currentUser } = useSelector((state) => state.auth);
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

          <Button variant="contained" onClick={handleOpen} ><ModeEditOutlineRoundedIcon/></Button>
        
      </Card>

      {open && <EditModal handleClose={handleClose} open={open}/>}
    </Container>
  );
};

export default Profile;
