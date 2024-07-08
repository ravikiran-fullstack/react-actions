import { ThemeProvider } from '@emotion/react';
import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { theme } from '../styles/themes';
import axios from 'axios';
import Card from '../components/Card';
import { LineOfBusiness } from '../types/types';

const LineOfBusinessRow = () => {
  const [lineOfBusinesses, setLineOfBusinesses] = useState<LineOfBusiness[]>(
    []
  );

  const fetchLineOfBusinesses = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const data = response.data;
      console.log('new response data', data);
      setLineOfBusinesses(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLineOfBusinesses();
  }, []);
  return (
    <div
      style={{
        color: 'black',
        border: '1px solid green',
        backgroundColor: 'white',
        width: '100vw',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'left' }}>
          Line of Business View
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{ textAlign: 'left' }}
        >
          Select a line of business below to view performance and health.
        </Typography>
      </Box>
      <Box
        style={{
          backgroundColor: 'white',
          padding: '20px',
          border: '1px dotted green',
          display: 'flex',
          overflowX: 'auto',
          flexWrap: 'nowrap',
          width: '100%', // Ensure the Box takes up only the intended space
          maxWidth: '200vw', // Ensure the Box takes up only the intended space
        }}
      >
        {lineOfBusinesses.slice(0, 15).map((lineOfBusinesses, index) => (
          <ThemeProvider theme={theme} key={index}>
            <Card
              firstName={lineOfBusinesses.firstName}
              lastName={lineOfBusinesses.lastName}
              hairColor={lineOfBusinesses.hair.color}
              bloodGroup={lineOfBusinesses.bloodGroup}
            />
          </ThemeProvider>
        ))}
      </Box>
    </div>
  );
};

export default LineOfBusinessRow;
