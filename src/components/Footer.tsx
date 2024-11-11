import React from 'react';
import { Box, Grid, Typography, IconButton, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/PhoneInTalk';
import visa from '../assets/icons/visa.png';
import paypal from '../assets/icons/paypall.png';
import masterCard from '../assets/icons/mastercard.png';
import shurva from '../assets/images/shurva.png'

const useStyles = makeStyles({
    footerContainer: {
        backgroundColor: '#f9f9f9',
        padding: '2rem 1rem',
        borderTop: '1px solid #e0e0e0',
        color: '#333',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
    },
    contactInfo: {
        color: '#E91E63',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    iconsContainer: {
        display: 'flex',
        gap: '1rem',
        marginTop: '0.5rem',
    },
    legalText: {
        marginTop: '1rem',
        fontSize: '0.8rem',
        color: '#666',
    },
});

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footerContainer}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" className={classes.logo}>YA BAO</Typography>
                    <Typography>Дух китайской еды</Typography>
                    <Box mt={2}>
                        <Typography variant="body2">Калорийность и состав</Typography>
                        <Typography variant="body2">Правовая информация</Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography variant="body2">Мы в соцсетях:</Typography>
                        <Typography variant="body2">YouTube</Typography>
                        <Typography variant="body2">Instagram</Typography>
                        <Typography variant="body2">Facebook</Typography>
                        <Typography variant="body2">ВКонтакте</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography variant="h6">Остались вопросы? Мы всегда на связи:</Typography>
                    <Box className={classes.iconsContainer}>
                        <IconButton>
                            <TelegramIcon />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                    </Box>
                    <Button variant="contained" color="primary" startIcon={<CallIcon />}>
                        Написать нам
                    </Button>
                </Grid>

                
                <Grid item xs={12} md={4} style={{ textAlign: 'right' }}>
                    <Typography className={classes.contactInfo}>8 800 333-36-62</Typography>
                    <Button variant="outlined" color="primary">Заказать звонок</Button>
                    <Box mt={2} className={classes.iconsContainer}>
                        <img src={visa} alt="Visa" style={{ height: '24px' }} />
                        <img src={paypal} alt="PayPal" style={{ height: '24px' }} />
                        <img src={masterCard} alt="MasterCard" style={{ height: '24px' }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid justifyContent={'right'}>
                <img src={shurva} alt="" />
            </Grid>


            <Box mt={3} textAlign="center" className={classes.legalText}>
                <Typography variant="body2">YaBao Все права защищены © 2021</Typography>
            </Box>
        </Box>
    );
};
export default Footer;
