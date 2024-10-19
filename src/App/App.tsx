import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import AppFrame from './AppFrame';
import MapPage from '../pages/MapPage';
import HomePage from '../pages/HomePage';

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
        ],
    },
]);
