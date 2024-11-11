import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const BonusesPage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Бонусы и акции
            </Typography>
            <Box>
                <Typography variant="body1">🎉 100 бонусов за первый заказ!</Typography>
                <Typography variant="body1">🎉 Скидка 10% при заказе на сумму от 500 ₽!</Typography>
                {/* Add more bonus details here */}
            </Box>
        </Container>
    );
};

export default BonusesPage;
