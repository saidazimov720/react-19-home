import React, { useState } from 'react';
import { Box, Typography, Grid, Card, IconButton, Button, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import combo from '../assets/images/kombo.png';
import pizza from '../assets/images/korzinka_pizzasi.png';

interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    image: string;
}

const Basket: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: 'С креветками и трюфелями',
            description: 'Домашняя паста феттучини, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г',
            price: 120,
            quantity: 1,
            image: `${pizza}`,
        },
        {
            id: 2,
            name: 'С креветками и трюфелями',
            description: 'Домашняя паста феттучини, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г',
            price: 120,
            quantity: 1,
            image: `${combo}`,
        },
    ]);

    const [promoCode, setPromoCode] = useState<string>('');

    const handleQuantityChange = (id: number, delta: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handlePromoCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPromoCode(event.target.value);
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Корзина
            </Typography>

            {cartItems.map((item) => (
                <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                    <Box display="flex" alignItems="center">
                        <img src={item.image} alt={item.name} width="50" style={{ marginRight: 16 }} />
                        <Box>
                            <Typography variant="subtitle1">{item.name}</Typography>
                            <Typography variant="body2" color="textSecondary">{item.description}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="h6" sx={{ mx: 2 }}>{item.price * item.quantity} Р</Typography>
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={() => handleQuantityChange(item.id, -1)}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="body1" sx={{ mx: 1 }}>{item.quantity}</Typography>
                        <IconButton onClick={() => handleQuantityChange(item.id, 1)}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                    <IconButton onClick={() => handleRemoveItem(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}

            <Divider sx={{ my: 4 }} />

            {/* Add More Products Section */}
            <Typography variant="h6" gutterBottom>Добавить к заказу?</Typography>
            <Grid container spacing={2}>
                {/* Map over suggestions here */}
                {[1, 2, 3].map((suggestion) => (
                    <Grid item xs={4} key={suggestion}>
                        <Card sx={{ padding: 2, textAlign: 'center' }}>
                            <img src="path-to-suggestion-image" alt="Suggested Item" width="50" />
                            <Typography variant="body2">Пример продукта</Typography>
                            <Typography variant="body2" color="primary">от 120 Р</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Sauces and Snacks Section */}
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>Соусы к бортикам и закускам</Typography>
            <Grid container spacing={2}>
                {[1, 2, 3, 4, 5, 6].map((sauce) => (
                    <Grid item xs={4} sm={2} key={sauce}>
                        <Card sx={{ padding: 2, textAlign: 'center' }}>
                            <img src="path-to-sauce-image" alt="Sauce" width="50" />
                            <Typography variant="body2">Сырный соус</Typography>
                            <Typography variant="body2" color="primary">от 120 Р</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Promo Code Section */}
            <Box display="flex" alignItems="center" my={4}>
                <TextField
                    variant="outlined"
                    label="Введите промокод"
                    value={promoCode}
                    onChange={handlePromoCodeChange}
                    fullWidth
                />
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>Применить</Button>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
                <Button startIcon={<ArrowBackIcon />} color="primary">Вернуться в магазин</Button>
                <Box>
                    <Typography variant="h6">Сумма заказа: {totalAmount} Р</Typography>
                    <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>Оформить заказ</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Basket;
