import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Targeting the root class of AppBar
          backgroundColor: 'navy', // Example of overriding the background color
          boxShadow: 'none', // Removing the box-shadow
          width: '100vw', // Ensuring the AppBar takes up the full width of the screen
        },
      },
    },
  },
});


const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={Link} to="/react-actions/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/react-actions/list">
            List
          </Button>
          <Button color="inherit" component={Link} to="/react-actions/row">
            Row
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
