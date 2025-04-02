import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ButtonWidget } from './widgets/button/button';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#d4d8dc"
    },
    secondary: {
      main: "#f25c55"
    },
    background: {
      default: "#050b21"
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#0c143d"
    },
    secondary: {
      main: "#c62219"
    },
    background: {
      default: "#ebf4fa"
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});


export default function App() {
  const [theme, setTheme] = React.useState(true);
  return (
    <ThemeProvider theme={ theme ? lightTheme : darkTheme} defaultMode='system'>
      <CssBaseline />
      <main>This app is using the dark mode</main>
        <ButtonWidget variant="outlined" children="Set theme" onClick={() => setTheme(!theme)}/>
    </ThemeProvider>
  );
}