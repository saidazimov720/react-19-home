import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, TextField, Button, Typography } from '@mui/material';

const CheckoutPage: React.FC = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Оформление заказа
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="fullName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField {...field} label="Полное имя" fullWidth margin="normal" required />
                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField {...field} label="Адрес доставки" fullWidth margin="normal" required />
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField {...field} label="Телефон" fullWidth margin="normal" required />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Подтвердить заказ
                </Button>
            </form>
        </Container>
    );
};

export default CheckoutPage;
