import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface OrderSummaryProps {
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ total }) => {
  return (
    <Box sx={{ textAlign: 'right', mt: 2 }}>
      <Typography variant="h5">Сумма заказа: {total} ₽</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Оформить заказ
      </Button>
    </Box>
  );
};

export default OrderSummary;
