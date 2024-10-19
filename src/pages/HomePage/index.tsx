import { Link } from 'react-router-dom';
import './index.css'; // Ensure this file is correctly linked to the component

export default function HomePage() {
    return (
        <div>
            {/* Section 1 */}
            <section className="container section-1">
                <h1 className="section-title">
                    Looking for a date with danger?
                </h1>{' '}
                {/* Title Header */}
                <div className="text-box">
                    <p>
                        Welcome to our danger level rating site! Using data
                        analysis, we&apos;ve created a tool to measure and rate
                        the safety of different areas across the USA. Whether
                        you&apos;re planning a move or just curious, our site
                        provides an easy way to explore the relative danger
                        levels of various regions. Dive in and discover more!
                    </p>
                </div>
            </section>
            <div className="divider"></div>

            {/* Section 2 */}
            <section className="container flex-row reverse section-2">
                <Link to="map" className="button">
                    Go to Interactive Map
                </Link>
                <div className="text-side">
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
            <div className="divider"></div>

            {/* Section 3 */}
            <section className="container flex-row section-3">
                <div className="text-side">
                    <h2>How it Works</h2>
                    <div className="texts-box">
                        <p>
                            Want to know how the ratings are determined or what
                            information we are aggregating? Take a look here to
                            find out about our pioneering rating technology!
                        </p>
                    </div>
                </div>
                <Link to="/how-it-works" className="buttons">
                    How it Works
                </Link>
            </section>
            <div className="divider"></div>
        </div>
    );
}
