import { Container, Grid, Grid2 } from '@mui/material'
import React from 'react'
import BlogList from '../components/BlogList'
import WeatherCard from '../components/WeatherCard'
import NewsCard from '../components/NewsCard'
import HalloCard from '../components/HalloCard'

const Home = () => {
  return (
   <Container  maxWidth="lg" sx={{display:"flex",justifyContent:"flex-end"}}>

    <Grid2 container spacing={3} width="100%">
        <Grid2 item size={10} sx={{flexGrow:5}}>
        <HalloCard/>
        <BlogList/>

        </Grid2>
        <Grid2 item size={2} sx={{flexGrow:1}}>
          <Grid2 item size={6}>
              <WeatherCard/>
          </Grid2>
          <Grid2 item size={6}>
              <NewsCard/>
          </Grid2>

        </Grid2>


      </Grid2>
    
   </Container>
      
  )
}

export default Home