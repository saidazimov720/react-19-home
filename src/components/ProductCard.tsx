import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    define: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="340"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    от {product.price} ₽
                </Typography>
                <Button variant="contained" color="secondary" fullWidth>
                    В корзину
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
