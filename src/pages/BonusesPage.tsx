import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Footer from '../components/Footer';

const BonusesPage: React.FC = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h1">Мои бонусы</Typography>
      
      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">Бонусы появятся здесь после заказа</Typography>
        </CardContent>
      </Card>

      <Footer />
    </Box>
  );
};

export default BonusesPage;
