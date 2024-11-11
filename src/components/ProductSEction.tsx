import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import images1 from '../assets/images/image.png';
import images2 from '../assets/images/image(1).png';
import images3 from '../assets/images/image(2).png';
import images4 from '../assets/images/image(3).png';

interface ProductSectionProps { 
    title: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title }) => {
    const products = [
        { id: 1, name: 'С креветками и трюфелями',
            define: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350', price: 600, image: images1 },
        { id: 2, name: 'С креветками и трюфелями', define: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350', price: 600, image: images2 },
        { id: 3, name: 'С креветками и трюфелями',define: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350', price: 600, image: images3 },
        { id: 4, name: 'С креветками и трюфелями',define: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350', price: 600, image: images4 },
    ];

    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom>{title}</Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductSection;
