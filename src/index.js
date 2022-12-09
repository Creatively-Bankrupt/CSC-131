import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme,ThemeProvider } from '@mui/material';
import { Login } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00b4d8', 
      darker: '#03045e'
    },
    secondary: {
      main: '#caf0f8'
    }
  }
}); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
