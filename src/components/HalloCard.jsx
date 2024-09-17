import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HalloCard = () => {
    const navigate =useNavigate()
  return (
    <Container maxWidth="lg" sx={{backgroundColor:"primary.contrastText",p:3,borderRadius:3,textAlign:"start", mb:3}}>
    <Typography  component="div">
        <Typography variant='h4'>Hallo "User"!</Typography>
        Explore insights, tips, and stories, and feel free to share your own thoughts and experiences with us.
    </Typography>
    <Button variant='contained' sx={{marginTop:3}}
    onClick={() => navigate("/newpostt")}>Write New Post</Button>

    </Container>
  )
}

export default HalloCard