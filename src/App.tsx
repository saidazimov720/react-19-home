import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ff4081', 
        },
        secondary: {
            main: '#333333', 
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', 
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Header /> 
                <AppRoutes />
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
