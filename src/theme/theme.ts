import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4081',
    },
    secondary: {
      main: '#333',
    },
  },
  typography: {
    h1: {
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
  },
});

export default theme;
