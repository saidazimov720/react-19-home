import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface BasketItemProps {
  name: string;
  price: number;
  quantity: number;
}

const BasketItem: React.FC<BasketItemProps> = ({ name, price, quantity }) => {
  return (
    <Card sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
      <CardMedia
        component="img"
        image="/path/to/image.jpg" 
        alt={name}
        sx={{ width: 80, height: 80 }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography color="text.secondary">{price} ₽ x {quantity}</Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
        <IconButton color="secondary">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default BasketItem;
