import React from 'react';
import { Box, Typography, Button, TextField, Divider } from '@mui/material';
import BasketItem from '../components/BasketItem';
import OrderSummary from '../components/OrderSummary';
import Footer from '../components/Footer';

const BasketPage: React.FC = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h1">Корзина</Typography>
      
      <Box sx={{ my: 3 }}>
        <BasketItem name="С креветками и трюфелями" price={120} quantity={2} />
        <BasketItem name="С курицей и грибами" price={110} quantity={1} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <TextField label="Введите промокод" variant="outlined" sx={{ mr: 2, flexGrow: 1 }} />
        <Button variant="contained" color="primary">Применить</Button>
      </Box>

      <Divider sx={{ my: 3 }} />

      <OrderSummary total={1048} />

      <Footer />
    </Box>
  );
};

export default BasketPage;
