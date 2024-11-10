import React from 'react';
import { RadioGroup, FormControlLabel, Radio, TextField, Box } from '@mui/material';

const PaymentMethods: React.FC = () => {
  return (
    <RadioGroup>
      <FormControlLabel value="online" control={<Radio />} label="Картой на сайте" />
      <FormControlLabel value="cash" control={<Radio />} label="Наличными" />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <TextField label="С какой суммы подготовить сдачу?" size="small" sx={{ mr: 2 }} />
        <FormControlLabel control={<Radio />} label="Без сдачи" />
      </Box>
    </RadioGroup>
  );
};

export default PaymentMethods;
