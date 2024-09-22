import { Container, Grid, Grid2, Typography } from '@mui/material'
import React from 'react'
import BlogList from '../components/BlogList'
import WeatherCard from '../components/WeatherCard'
import NewsCard from '../components/NewsCard'
import HalloCard from '../components/HalloCard'
import Calendar from '../components/Calendar'

const Home = () => {
  return (
   <Container  maxWidth="xl">
  

    <Grid2 container spacing={3} width="100%">
        <Grid2 size={{xs:12,md:8}} >
        <HalloCard/>
        <BlogList/>

        </Grid2>
        <Grid2 size={{xs:0,md:4}} sx={{display:{xs:"none",md:"block"}}}>
          <Grid2 size={6}>
              <WeatherCard/>
          </Grid2>
          <Grid2 size={6}>
              <Calendar/>
          </Grid2>

        </Grid2>


      </Grid2>
    
   </Container>
      
  )
}

export default Home