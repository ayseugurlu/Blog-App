import { Container, Grid, Grid2 } from '@mui/material'
import React from 'react'
import BlogList from '../components/BlogList'
import WeatherCard from '../components/WeatherCard'
import NewsCard from '../components/NewsCard'

const Home = () => {
  return (
   <Container  maxWidth="lg">

    <Grid2 container>
        <Grid2 item size={10}>
        <BlogList/>

        </Grid2>
        <Grid2 item size={2}>
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