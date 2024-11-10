// src/components/BonusesCard.tsx
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const BonusesCard: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardMedia
        component="img"
        height="140"
        image="/path/to/gift-icon.jpg" // Replace with your actual image path
        alt="Bonuses"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ваши бонусы
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Бонусы появятся здесь после заказа.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BonusesCard;
