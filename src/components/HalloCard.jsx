import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import foto from "../assets/owl.png"

const HalloCard = () => {
    const navigate =useNavigate()
    const {currentUser} = useSelector(state=>state.auth)
    console.log(currentUser);
  return (
    <Container maxWidth="lg" sx={{backgroundColor:"primary.contrastText",p:3,borderRadius:3,display:"flex",justifyContent:"space-around", mb:3}}>
    <Box component="div">
       <Typography  component="div">
        <Typography variant='h4'>Hello {currentUser ? `${currentUser.firstName}!` : ""}</Typography>
        Explore insights, tips, and stories, and feel free to share your own thoughts and experiences with us.
    </Typography>

    {currentUser ? (<Button variant='contained' sx={{marginTop:3}}
    onClick={() => navigate("/newpost")}>Write New Post</Button>) : (<Button variant='contained' sx={{marginTop:3}}
    onClick={() => navigate("/login")}>Login</Button>)}
    </Box>

    <Box component="div">
      <Box component="img" src={foto} width="100px" height="100px"/>
    </Box>
   
    
    

    </Container>
  )
}

export default HalloCard