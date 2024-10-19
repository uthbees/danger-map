import './HowItWorksPage.css';
import { Table } from '@mui/material';
import CountiesDataTable from './CountiesDataTable';

export default function HowItWorksPage() {
    return (
        <div className="page-container">
            <header className="header">
                <h1 className="page-header">How it works</h1>
            </header>
            <main className="main-content">
                <section className="content">
                    <p>
                        At Dangerscape USA, we have collected several datasets
                        from around the internet which we use to provide risk
                        scores for each U.S. county in a map visualization for
                        your convenience. But you may have wondered - how
                        exactly do we come up with these risk scores?
                    </p>
                    <p>
                        The process of computing a risk score for a given county
                        is fairly simple. First, we compute a risk score using
                        our datasets for each enabled risk factor (an example of
                        risk factors being robberies or car crash frequency). As
                        part of this process, all risk scores are normalized
                        using a formula tuned for the individual risk score,
                        aiming to keep all scores in the range of 1 to 10.
                        Second, all risk scores are averaged together with the
                        other risk scores in their category, with higher
                        importance risk scores weighted higher in the result.
                        Finally, the composite category risk scores are averaged
                        together to create the final score, with higher
                        importance categories again weighted higher in the
                        equation.
                    </p>
                    <p>
                        If you want to view the datasets we used, you can
                        download them here:
                    </p>
                    <ul>
                        <li>
                            Crime:{' '}
                            <a href="https://www.kaggle.com/datasets/mikejohnsonjr/united-states-crime-rates-by-county/data">
                                https://www.kaggle.com/datasets/mikejohnsonjr/united-states-crime-rates-by-county/data
                            </a>
                        </li>
                        <li>
                            Car accidents:{' '}
                            <a href="https://www.nhtsa.gov/file-downloads?p=nhtsa/downloads/FARS/">
                                https://www.nhtsa.gov/file-downloads?p=nhtsa/downloads/FARS/
                            </a>
                        </li>
                        <li>
                            Fire:{' '}
                            <a href="https://wildfirerisk.org/about/methods/">
                                https://wildfirerisk.org/about/methods/
                            </a>
                        </li>
                        <li>
                            Earthquakes:{' '}
                            <a href="https://www.kaggle.com/datasets/mustafakeser4/earthquakes-2023-global">
                                https://www.kaggle.com/datasets/mustafakeser4/earthquakes-2023-global
                            </a>
                        </li>
                    </ul>
                    <p>
                        Finally, you can find our GeoJSON (location shapes) data
                        here:
                    </p>
                    <ul>
                        <li>
                            U.S. Counties:{' '}
                            <a href="https://gist.github.com/sdwfrost/d1c73f91dd9d175998ed166eb216994a">
                                https://gist.github.com/sdwfrost/d1c73f91dd9d175998ed166eb216994a
                            </a>
                        </li>
                        <li>
                            U.S. States:{' '}
                            <a href="https://github.com/PublicaMundi/MappingAPI/blob/master/data/geojson/us-states.json">
                                https://github.com/PublicaMundi/MappingAPI/blob/master/data/geojson/us-states.json
                            </a>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
