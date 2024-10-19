import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppFrame from './AppFrame';
import MapPage from './pages/MapPage';

export default function App() {
    return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
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
