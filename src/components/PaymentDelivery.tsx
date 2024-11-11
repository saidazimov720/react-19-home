import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const infoCards = [
    {
        icon: <PaymentIcon fontSize="large" color="primary" />,
        title: 'Lorem ipsum dolor sit amet',
        description: 'consectetur adipiscing elit',
    },
    {
        icon: <LocalShippingIcon fontSize="large" color="primary" />,
        title: 'Lorem ipsum dolor sit amet',
        description: 'consectetur adipiscing elit',
    },
    {
        icon: <CheckCircleOutlineIcon fontSize="large" color="primary" />,
        title: 'Lorem ipsum dolor sit amet',
        description: 'consectetur adipiscing elit',
    },
    {
        icon: <SupportAgentIcon fontSize="large" color="primary" />,
        title: 'Lorem ipsum dolor sit amet',
        description: 'consectetur adipiscing elit',
    },
];

const PaymentAndDelivery: React.FC = () => {
    return (
        <Box sx={{ py: 6, backgroundColor: '#f0f5f9' }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ color: '#E91E63', fontWeight: 'bold', mb: 4 }}
            >
                Оплата и доставка
            </Typography>
            
            {/* Info Cards */}
            <Grid container spacing={2} justifyContent="center">
                {infoCards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
                            <CardContent sx={{ textAlign: 'center', py: 3 }}>
                                {card.icon}
                                <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box mt={4} display="flex" justifyContent="center">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450919!2d144.9537353154469!3d-37.81627944202156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f118b41f%3A0x5045675218ce6e0!2sVictoria%20State%20Library!5e0!3m2!1sen!2sau!4v1632649280290!5m2!1sen!2sau"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                ></iframe>
            </Box>
        </Box>
    );
};

export default PaymentAndDelivery;
