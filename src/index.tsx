import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import "./styles/globals.css"; 
import './index.css'; 
import App from './App.tsx'; 
import '@mantine/core/styles.css'; 
import {
  createTheme,
  MantineProvider,
  MantineColorsTuple,
} from "@mantine/core"; 


const base: MantineColorsTuple = [
  "#ffae00", 
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffffff",
];


const theme = createTheme({
  colors: {
    primary: base, 
  },
  primaryColor: "primary", 
  primaryShade: { light: 9, dark: 9 }, 
});


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </BrowserRouter>,
);