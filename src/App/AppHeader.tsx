import { Link } from 'react-router-dom';
import './AppHeader.css'; // Import the CSS file

export default function AppHeader() {
    return (
        <div className="navbar">
            <Link className="nav-button" to="/">
                Home
            </Link>
            <Link className="nav-button" to="/map">
                Map
            </Link>
            <Link className="nav-button" to="/how-it-works">
                How it Works
            </Link>
            <Link className="nav-button" to="/legal">
                Legal Disclaimer
            </Link>
            <Link className="nav-button" to="/about-us">
                About Us
            </Link>
            <div className="nav-header">
                <h2>What&apos;s up Danger</h2>
            </div>
        </div>
    );
}
