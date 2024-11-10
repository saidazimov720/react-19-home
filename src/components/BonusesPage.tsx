// src/pages/BonusesPage.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import BonusesCard from '../components/BonusesCard';
import Footer from '../components/Footer';

const BonusesPage: React.FC = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h1">Мои бонусы</Typography>
      
      <Box sx={{ mt: 4 }}>
        <BonusesCard />
      </Box>
      
      <Footer />
    </Box>
  );
};

export default BonusesPage;
