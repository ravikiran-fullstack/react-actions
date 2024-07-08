import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LineOfBusinessRow from './pages/LineOfBusinessRow.jsx';
import LineOfBusinesses from './pages/LineOfBusinesses.jsx';
import Navbar from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Box>
      <Routes>
        <Route path="/react-actions/" element={<App />} />
        <Route path="/react-actions/list" element={<LineOfBusinesses />} />
        <Route path="/react-actions/row" element={<LineOfBusinessRow />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
