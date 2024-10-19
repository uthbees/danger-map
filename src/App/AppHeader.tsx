import { Link } from 'react-router-dom';

export default function AppHeader() {
    return (
        <div
            style={{
                width: '100%',
                height: '12%',
                borderBottom: '1px solid black',
                backgroundColor: 'white',
                zIndex: 10,
            }}
        >
            <Link to="/">Home</Link>
            <Link to="/map">Map</Link>
            <Link to="/how-it-works">How it Works</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/legal">Legal Disclaimer</Link>
        </div>
    );
}
