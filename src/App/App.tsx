import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import AppFrame from './AppFrame';
import MapPage from '../pages/MapPage';
import HomePage from '../pages/HomePage';
import HowItWorksPage from '../pages/WorksPage/HowItWorksPage';
import AboutUsPage from '../pages/AboutPage/AboutUsPage';
import LegalPage from '../pages/LegalPage/LegalPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: `"Roboto Slab", "Helvetica", "Arial", sans-serif`,
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

const router = createHashRouter([
    {
        path: '/',
        element: <AppFrame />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'map',
                element: <MapPage />,
            },
            {
                path: '/how-it-works',
                element: <HowItWorksPage />,
            },
            {
                path: '/about-us',
                element: <AboutUsPage />,
            },
            {
                path: '/legal',
                element: <LegalPage />,
            },
        ],
    },
]);
