import { createHashRouter, RouterProvider } from 'react-router-dom';
import AppFrame from './AppFrame';
import MapPage from '../pages/MapPage';
import './index.css';

export default function App() {
    return <RouterProvider router={router} />;
}

const router = createHashRouter([
    {
        path: '/',
        element: <AppFrame />,
        children: [
            {
                path: 'map',
                element: <MapPage />,
            },
        ],
    },
]);
