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
            <Link className="nav-button" to="/hiwp">
                How it Works
            </Link>
            <Link className="nav-button" to="/aboutus">
                About Us
            </Link>
            <Link className="nav-button" to="/legal">
                Legal Disclaimer
            </Link>
        </div>
    );
}
