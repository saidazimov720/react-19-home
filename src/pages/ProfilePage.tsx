import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, TextField, Button, Typography } from '@mui/material';

const ProfilePage: React.FC = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Профиль пользователя
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField {...field} label="Электронная почта" fullWidth margin="normal" required />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField {...field} label="Пароль" type="password" fullWidth margin="normal" required />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Сохранить изменения
                </Button>
            </form>
        </Container>
    );
};

export default ProfilePage;
