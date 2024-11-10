import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Header from './components/Header';
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BasketPage />
    </ThemeProvider>
  );
}

export default App;
