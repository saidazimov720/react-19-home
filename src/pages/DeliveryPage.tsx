import React from 'react';
import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const DeliveryPage: React.FC = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h1">Заказ на доставку</Typography>

      <Box component="form" sx={{ mt: 3 }}>
        <TextField fullWidth label="Имя" variant="outlined" sx={{ mb: 2 }} />
        <TextField fullWidth label="Номер телефона" variant="outlined" sx={{ mb: 2 }} />
        <TextField fullWidth label="Адрес доставки" variant="outlined" sx={{ mb: 2 }} />

        <Typography variant="h6" sx={{ mt: 2 }}>Способы оплаты</Typography>
        <RadioGroup>
          <FormControlLabel value="online" control={<Radio />} label="Картой на сайте" />
          <FormControlLabel value="cash" control={<Radio />} label="Наличными" />
        </RadioGroup>

        <Button variant="contained" color="primary" sx={{ mt: 3 }}>Оформить заказ</Button>
      </Box>
    </Box>
  );
};

export default DeliveryPage;
