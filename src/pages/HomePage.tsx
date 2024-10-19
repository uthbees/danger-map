import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure this file is correctly linked to the component

export default function HomePage() {
    return (
        <div>
            {/* Section 1 */}
            <section className="container section-1">
                <header>
                    <h1>What&apos;s up Danger</h1> {/* Box 2 */}
                </header>
                <div className="text-box">
                    {' '}
                    {/* Box 3 */}
                    <p>
                        Cheese, cheese, cheese, cheese. It should be
                        center-aligned.
                    </p>
                </div>
            </section>
            <div className="divider"></div> {/* Divider 12 */}
            {/* Section 2 */}
            <section className="container flex-row reverse section-2">
                {' '}
                {/* Button on the left for this section */}
                <Link to="map" className="button">
                    Go to Interactive Map
                </Link>{' '}
                {/* Box 7 */}
                <div className="text-side">
                    {' '}
                    {/* Box 5, 6 */}
                    <h2>Sub Header</h2>
                    <div className="text-box">
                        <p>Cheese-related text or description goes here.</p>
                    </div>
                </div>
            </section>
            <div className="divider"></div> {/* Divider 13 */}
            {/* Section 3 */}
            <section className="container flex-row section-3">
                {' '}
                {/* Button on the right */}
                <div className="text-side">
                    {' '}
                    {/* Box 8, 9 */}
                    <h2>Score Breakdown</h2>
                    <div className="text-box">
                        <p>Cheese breakdown description goes here.</p>
                    </div>
                </div>
                <Link to="/hiwp" className="button">
                    How it Works
                </Link>{' '}
                {/* Box 10 */}
            </section>
            <div className="divider"></div> {/* Divider 14 */}
        </div>
    );
}
