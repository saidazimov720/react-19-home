import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 4, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
      <Typography variant="body2" color="textSecondary">
        Ya Bao © 2021
      </Typography>
      <Box mt={2}>
        <Link href="#" underline="hover" color="primary">YouTube</Link> |{' '}
        <Link href="#" underline="hover" color="primary">Facebook</Link> |{' '}
        <Link href="#" underline="hover" color="primary">Instagram</Link>
      </Box>
    </Box>
  );
};

export default Footer;
