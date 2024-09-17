import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = "344af0bac8cf965c9169f60d16f1c1ae";
const units = "metric";
let lang = "en";

const WeatherCard = () => {

  const [dataWeather, setDataWeather] = useState(null);

  const getWeather = async (latitude, longitude) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&appid=${apiKey}`
      );
      console.log("weather:", data);
      setDataWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        getWeather(latitude, longitude); 
      },
      (error) => {
        console.error("Error getting geolocation:", error);
      }
    );
  }, []);

  return (
    <Container sx={{backgroundColor:"secondary.main",padding:3,borderRadius:3}}>
      {dataWeather ? (
        <>
          <Typography variant="h4">{dataWeather.name}</Typography>
          <Typography variant="h6">{dataWeather.weather[0].description}</Typography>
          <Box width="50px"
            component="img"
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${dataWeather.weather[0].icon}.svg`}
            alt={dataWeather.weather[0].description}
          />
        </>
      ) : (
        <Typography>Loading weather data...</Typography>
      )}
    </Container>
  );
};

export default WeatherCard;
