import React from 'react';
import { Box, FormControlLabel, Switch, Typography } from '@mui/material';

const SubscriptionOptions: React.FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Подписки</Typography>
      <FormControlLabel
        control={<Switch color="primary" />}
        label="Сообщать о бонусах, акциях и новых продуктах"
      />
    </Box>
  );
};

export default SubscriptionOptions;
