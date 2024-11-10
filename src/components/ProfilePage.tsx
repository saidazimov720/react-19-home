import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import ProfileDetails from '../components/ProfileDetails';
import SubscriptionOptions from '../components/SubscriptionOptions';
import Footer from '../components/Footer';

const ProfilePage: React.FC = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h1">Личные данные</Typography>
      
      <Divider sx={{ my: 2 }} />
      
      <ProfileDetails />
      
      <Divider sx={{ my: 2 }} />
      
      <SubscriptionOptions />
      
      <Footer />
    </Box>
  );
};

export default ProfilePage;
