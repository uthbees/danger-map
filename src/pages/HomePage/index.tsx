import { Link } from 'react-router-dom';
import './index.css'; // Ensure this file is correctly linked to the component

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
                        Welcome to our danger level rating site! Using data
                        analysis, we&apos;ve created a tool to measure and rate
                        the safety of different areas across the USA. Whether
                        you&apos;re planning a move or just curious, our site
                        provides an easy way to explore the relative danger
                        levels of various regions. <br></br> . . . . . . . . . .
                        . . . . . . . . . . . . . . . . . . Dive in and discover
                        more! . . . . . . . . . . . . . . . . . . . . . . . . .
                        . . .
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
                    <h2>Interactive Map</h2>
                    <div className="texts-box">
                        <p>
                            Take a look at various US counties using advanced
                            analysis techniques, combined with groundbreaking
                            filters, and check to see what kind of danger might
                            be lurking!
                        </p>
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
                    <h2>How it Works</h2>
                    <div className="texts-box">
                        <p>
                            Want to know how the ratings are determined or what
                            information we are aggregating? Take a look here to
                            find out about our pioneering rating technology!
                        </p>
                    </div>
                </div>
                <Link to="/how-it-works" className="button">
                    How it Works
                </Link>{' '}
                {/* Box 10 */}
            </section>
            <div className="divider"></div> {/* Divider 14 */}
        </div>
    );
}
