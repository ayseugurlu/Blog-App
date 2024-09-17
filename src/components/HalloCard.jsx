import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const HalloCard = () => {
  return (
    <Container maxWidth="lg">
    <Typography variant='h4' component="div">
        <Typography>Hallo "User"!</Typography>
        Explore insights, tips, and stories, and feel free to share your own thoughts and experiences with us.
    </Typography>
    <Button>Write New Post</Button>

    </Container>
  )
}

export default HalloCard