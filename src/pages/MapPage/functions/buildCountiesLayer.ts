import getRiskScore from './getRiskScore';
import getCountyData from './getCountyData';
import { GeoJsonObject } from 'geojson';
import { RiskFactorEnabledStatuses } from '../types';
import getRiskScoreColor from './getRiskScoreColor';
import L from 'leaflet';
import counties from '../counties.json';

export default function buildCountiesLayer(
    riskFactors: RiskFactorEnabledStatuses,
): L.Layer {
    return L.geoJSON(counties as unknown as GeoJsonObject[], {
        style: (feature) => {
            if (feature === undefined) {
                alert('Feature undefined!');
                throw new Error('Feature undefined!');
            }
            return {
                fillColor: getRiskScoreColor(
                    getRiskScore(
                        getCountyData(
                            feature.properties.NAME,
                            feature.properties.STATEFP,
                        ),
                        riskFactors,
                    ),
                ),
                weight: 1,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.7,
            };
        },
        onEachFeature: (feature, layer) => {
            // Attach a popup with county information
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(
                    `${feature.properties.NAME} County<br/>${feature.properties.GEOID}`,
                );
            }
        },
    });
}
