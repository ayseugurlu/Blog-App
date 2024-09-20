import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HalloCard = () => {
    const navigate =useNavigate()
    const {currentUser} = useSelector(state=>state.auth)
    console.log(currentUser);
  return (
    <Container maxWidth="lg" sx={{backgroundColor:"primary.contrastText",p:3,borderRadius:3,textAlign:"start", mb:3}}>
    <Typography  component="div">
        <Typography variant='h4'>Hallo {currentUser ? `${currentUser.firstName}!` : ""}</Typography>
        Explore insights, tips, and stories, and feel free to share your own thoughts and experiences with us.
    </Typography>

    {currentUser ? (<Button variant='contained' sx={{marginTop:3}}
    onClick={() => navigate("/newpost")}>Write New Post</Button>) : (<Button variant='contained' sx={{marginTop:3}}
    onClick={() => navigate("/login")}>Login</Button>)}
    
    

    </Container>
  )
}

export default HalloCard