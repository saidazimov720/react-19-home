import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import sweet from '../assets/images/image 26.png';

const promotions = [
    { id: 1, title: 'Торты на заказ', image: {sweet} },
];

const PromotionsSection: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {promotions.map((promo) => (
                <Grid item xs={12} sm={6} md={4} key={promo.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{promo.title}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default PromotionsSection;

