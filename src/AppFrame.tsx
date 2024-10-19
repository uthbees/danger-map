import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';

export default function AppFrame() {
    return (
        <div style={{ height: '100vh', display: 'flex', flexFlow: 'column' }}>
            <AppHeader />
            <Outlet />
        </div>
    );
}
