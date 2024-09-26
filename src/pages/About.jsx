import React from 'react'
import profil from "../assets/Woman icon.png"
import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material'

const About = () => {
  return (
    <Container maxWidth="md" sx={{display:"flex",justifyContent:"center" ,mt:15,height:"100vh"}}>
      <Card sx={{padding:5,display:"flex" ,justifyContent:"center",alignItems:"center",backgroundColor:"primary.main",color:"secondary.contrastText",borderRadius:5,height:"500px"}}>
      <CardMedia image={profil} sx={{height:"300px", width:"250px"}}/>
      <CardContent>
        <Typography variant='h5'>About Software Developer <Typography variant='h4' color="success" component="span">Ayse Ugurlu</Typography></Typography>
        <Typography variant='h6'>Hi! I am AYSE</Typography>
        <Typography variant='h6'>I am currently learning Full Stack Development Languages.</Typography>
        
        <Typography variant='h6'><a style={{textDecoration:"none", color:"orange"}} href="https://github.com/ayseugurlu">Go GitHub : </a> https://github.com/ayseugurlu</Typography>
      </CardContent>
        

      </Card>
    </Container>
  )
}

export default About