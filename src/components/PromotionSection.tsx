import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import sweet from '../assets/images/promotion.png';

const promotions = [
    { id: 1, title: 'Торты на заказ', image: {sweet} },
];

const PromotionsSection: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {promotions.map((promo) => (
                <Grid item xs={12} sm={6} md={12} key={promo.id} justifyContent={'space-between'}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{promo.title}</Typography>
                            <img src={sweet} alt="promotion" />
                            <img src={sweet} alt="promotion" />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default PromotionsSection;

