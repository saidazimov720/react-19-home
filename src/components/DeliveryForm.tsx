import React from 'react';
import { Box, TextField, Typography, MenuItem } from '@mui/material';

const DeliveryForm: React.FC = () => {
  return (
    <Box component="form" sx={{ mt: 3 }}>
      <TextField fullWidth label="Имя" variant="outlined" defaultValue="Илья" sx={{ mb: 2 }} />
      <TextField fullWidth label="Номер телефона" variant="outlined" defaultValue="+7 999 999-99-99" sx={{ mb: 2 }} />
      <TextField fullWidth label="Адрес доставки" variant="outlined" defaultValue="ул. Кима, д. 1" sx={{ mb: 2 }} />
      <TextField
        select
        label="Время доставки"
        defaultValue="Быстрее"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      >
        <MenuItem value="Быстрее">Быстрее</MenuItem>
        <MenuItem value="Время 1">Время 1</MenuItem>
        <MenuItem value="Время 2">Время 2</MenuItem>
      </TextField>
    </Box>
  );
};

export default DeliveryForm;
