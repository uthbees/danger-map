import { Link } from 'react-router-dom';

export default function AppHeader() {
    return (
        <div
            style={{
                width: '100%',
                height: '50px',
                borderBottom: '1px solid black',
                backgroundColor: 'white',
                zIndex: 10,
            }}
        >
            <Link to="/">Home</Link>
            <Link to="/map">Map</Link>
        </div>
    );
}
