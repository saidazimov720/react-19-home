import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/icons/Logo.png';

const Header = () => {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
          <RouterLink to="/">
            <img src={logo} alt="YA BAO" style={{ height: 40 }} />
          </RouterLink>
          <Typography variant="h6" component="h2" sx={{ ml: 2 }}>
            YA BAO
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', gap: 3 }}>
          <Link component={RouterLink} to="/" color="inherit" underline="none" variant="body1">
            Главная
          </Link>
          <Link component={RouterLink} to="/bonuses" color="inherit" underline="none" variant="body1">
            Бонусы
          </Link>
          <Link component={RouterLink} to="/basket" color="inherit" underline="none" variant="body1">
            Корзина
          </Link>
          <Link component={RouterLink} to="/contact" color="inherit" underline="none" variant="body1">
            Контакты
          </Link>
        </Box>

        <Box sx={{ textAlign: 'center', mr: 3 }}>
          <Typography variant="body1">
            Доставка пасты Москва
          </Typography>
          <Typography variant="caption">
            30 минут от 31 мин
          </Typography>
        </Box>
        <Button variant="contained" color="secondary" sx={{ mr: 3 }}>
          Заказать звонок
        </Button>
        <Typography variant="h6" component="h2">
          8 800 333-36-62
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
