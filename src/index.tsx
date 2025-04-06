import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import "./styles/globals.css"; // Global styles
import './index.css'; // Additional styles
import App from './App.tsx'; // Main App component
import '@mantine/core/styles.css'; // Mantine core styles
import {
  createTheme,
  MantineProvider,
  MantineColorsTuple,
} from "@mantine/core"; // Mantine's core functionality

// Define a base color palette
const base: MantineColorsTuple = [
  "#ffae00", // Custom colors for your theme
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffffff", // Light color at the end of the palette
];

// Create a Mantine theme with custom colors
const theme = createTheme({
  colors: {
    primary: base, // Set your custom primary color
  },
  primaryColor: "primary", // Use your base color as the primary
  primaryShade: { light: 9, dark: 9 }, // Define the shade for light and dark themes
});

// Render the application wrapped in MantineProvider and BrowserRouter
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </BrowserRouter>,
);