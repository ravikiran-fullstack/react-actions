import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from '../styles/themes';

const LineOfBusinesses = () => {
  const [lineOfBusinesses, setLineOfBusinesses] = useState([]);

  const fetchLineOfBusinesses = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      console.log('data', data);
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
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'column',
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
      <Box style={{ backgroundColor: 'white', padding: '20px' }}>
        <Grid
          container
          spacing={3}
          style={{
            backgroundColor: 'white',
            // border: '1px solid red',
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
            color: 'black',
            width: '100%',
          }}
        >
          {lineOfBusinesses.map((lineOfBusinesses, index) => (
            <Grid item xs={6} md={4} key={index}>
              <ThemeProvider theme={theme}>
                <Card
                  firstName={lineOfBusinesses.firstName}
                  lastName={lineOfBusinesses.lastName}
                  hairColor={lineOfBusinesses.hairColor}
                  bloodGroup={lineOfBusinesses.bloodGroup}
                />
              </ThemeProvider>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default LineOfBusinesses;
