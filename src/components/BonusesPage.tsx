import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import price from '../assets/icons/image 33.png'

// interface PersonalData {
//     name: string;
//     phone: string;
// }

const MyBonusesPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [phoneNumbers, setPhoneNumbers] = useState<string[]>(['+7 999 999-99-99', '1234']);
    const [name, setName] = useState('Илья');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (newPhoneNumber: string) => {
        setPhoneNumbers([...phoneNumbers, newPhoneNumber]);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    const handleDeletePhoneNumber = (index: number) => {
        const newPhoneNumbers = [...phoneNumbers];
        newPhoneNumbers.splice(index, 1);
        setPhoneNumbers(newPhoneNumbers);
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ mb: 2 }}>
                <img src={price} alt="Бонусная карта" />
                <Typography variant="body1">
                    Бонусы появятся здесь после заказа
                </Typography>
                <Button variant="text" color="secondary">
                    Все наши акции
                </Button>
            </Box>

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" component="h2">
                    Личные данные
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Имя"
                        value={name}
                        disabled={!isEditing}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />
                    <Button disabled={!isEditing} onClick={handleEditClick}>
                        Изменить
                    </Button>
                </Box>

                {phoneNumbers.map((phoneNumber, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <TextField
                            label="Номер телефона"
                            value={phoneNumber}
                            disabled={!isEditing}
                            fullWidth
                        />
                        {isEditing ? (
                            <Button onClick={() => handleDeletePhoneNumber(index)}>Удалить</Button>
                        ) : (
                            <Button onClick={handleEditClick}>Изменить</Button>
                        )}
                    </Box>
                ))}

                {isEditing && (
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="Номер телефона"
                            onChange={(e) => setPhoneNumbers([...phoneNumbers, e.target.value])}
                            fullWidth
                        />
                        <Button variant="contained" color="secondary" onClick={() => handleSaveClick(phoneNumbers[0])}>
                            Сохранить
                        </Button>
                        <Button variant="text" color="secondary" onClick={handleCancelClick}>
                            Отменить
                        </Button>
                    </Box>
                )}

                <Box sx={{ mb: 2 }}>
                    <TextField
                        label="Введите четыре цифры"
                        disabled
                        defaultValue="1223"
                        fullWidth
                    />
                    <Button disabled>Изменить</Button>
                </Box>

            </Box>

            <Box>
                <Typography variant="h6" component="h2">
                    Подписки
                </Typography>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Сообщать о бонусах, акциях и новых продуктах"
                />
                <Button variant="contained" color="secondary">
                    Выйти
                </Button>
            </Box>
        </Box>
    );
};

export default MyBonusesPage;