import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ProductSection from '../components/ProductSEction';
import PromotionsSection from '../components/PromotionSection';
import PaymentAndDelivery from '../components/PaymentDelivery';

const MainPage: React.FC = () => {
    return (
        <Box>
            <Container sx={{ my: 4 }}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Новинки
                </Typography>
                <ProductSection title="Новинки" />

                <Typography variant="h3" color="primary" gutterBottom>
                    Паста
                </Typography>
                <ProductSection title="Паста" />

                <Typography variant="h3" color="primary" gutterBottom>
                    Наши акции
                </Typography>
                <PromotionsSection />

                <Typography variant="h3" color="primary" gutterBottom>
                <PaymentAndDelivery />
                </Typography>
            </Container>
        </Box>
    );
};

export default MainPage;
