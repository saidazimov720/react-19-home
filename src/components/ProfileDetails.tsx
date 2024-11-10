import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ProfileDetails: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>Информация пользователя</Typography>
      <TextField fullWidth label="Имя" variant="outlined" defaultValue="Илья" sx={{ mb: 2 }} />
      <TextField fullWidth label="Номер телефона" variant="outlined" defaultValue="+7 999 999-99-99" sx={{ mb: 2 }} />
      <Button variant="contained" color="primary">Сохранить изменения</Button>
    </Box>
  );
};

export default ProfileDetails;
