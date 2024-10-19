import './legal.css';

export default function LegalPage() {
    return (
        <div className="page-container">
            <header className="header">
                <h1>Legal Disclaimer</h1>
            </header>
            <main className="main-content">
                <section className="content">
                    <p>
                        The information presented on this website, including all
                        data and visual representations of the map, is for
                        informational purposes only. The map and its associated
                        data, including but not limited to the geographic
                        information and scoring metrics for counties, have been
                        obtained from third-party sources. We do not claim
                        ownership or responsibility for the accuracy,
                        completeness, or reliability of this data.
                    </p>
                    <p>
                        Any interpretations, analyses, or conclusions drawn from
                        the map data, including potential political implications
                        or societal inferences, are solely the views of the user
                        or viewer and do not reflect the opinions or positions
                        of Team 35 I-Hack 2024 or any associated entities.
                    </p>
                    <p>
                        We recognize that data representation can be subject to
                        various interpretations, and we encourage users to
                        exercise discretion when interpreting the information
                        presented. The scores and classifications attributed to
                        counties may not accurately reflect the complexities of
                        the underlying data, and we do not endorse or support
                        any discriminatory interpretations that may arise from
                        the use of this data.
                    </p>
                    <p>
                        By using this website, you acknowledge and agree that
                        Team 35 I-Hack 2024 shall not be liable for any damages
                        or claims arising from your use or reliance on the
                        information provided herein.
                    </p>
                </section>
            </main>
        </div>
    );
}
