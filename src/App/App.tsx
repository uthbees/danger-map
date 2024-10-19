import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import AppFrame from './AppFrame';
import MapPage from '../pages/MapPage';
import HomePage from '../pages/HomePage';
import HowItWorksPage from '../pages/WorksPage/HowItWorksPage';
import AboutUsPage from '../pages/AboutUsPage';
import LegalPage from '../pages/LegalPage/LegalPage';

export default function App() {
    return <RouterProvider router={router} />;
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
