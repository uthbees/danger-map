import L from 'leaflet';
import { GeoJsonObject } from 'geojson';
import counties from '../counties.json';
import states from '../us-states.json';
import getCountyData from './getCountyData';
import getRiskScore from './getRiskScore';
import { RiskFactorEnabledStatuses } from '../types';

export default function setupMap(riskFactors: RiskFactorEnabledStatuses) {
    // Initialize the map centered on the USA
    const map = L.map('map').setView([37.8, -96], 4);

    // Add a base layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Create a GeoJSON layer and add it to the map
    L.geoJSON(counties as unknown as GeoJsonObject[], {
        style: function (feature) {
            if (feature === undefined) {
                alert('Feature undefined!');
                throw new Error('Feature undefined!');
            }
            return {
                fillColor: getColor(
                    getRiskScore(
                        getCountyData(
                            feature.properties.NAME,
                            feature.properties.STATEFP,
                        ),
                    ),
                ),
                weight: 1,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.7,
            };
        },
        onEachFeature: function (feature, layer) {
            // Attach a popup with county information
            if (feature.properties && feature.properties.NAME) {
                layer.bindPopup(
                    `${feature.properties.NAME} county<br/>${feature.properties.GEOID}`,
                );
            }
        },
    }).addTo(map);

    // Add a GeoJSON layer for state boundaries with a black outline
    L.geoJSON(states as unknown as GeoJsonObject, {
        style: {
            color: 'black', // Black outline
            weight: 2, // Thickness of the line
            fillOpacity: 0, // No fill, just the outline
        },
    }).addTo(map);

    // Legend code goes here
    const legend = (L.control as any)({ position: 'bottomright' });

    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        div.innerHTML += 'Risk score<br/>';

        // Loop through the grades and generate a label with a colored square
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' +
                getColor(grades[i]) +
                '"></i> ' +
                grades[i] +
                '<br>';
        }

        return div;
    };

    legend.addTo(map);
}

function getColor(riskScore: number | undefined) {
    if (riskScore === undefined) {
        return '#aaaaaa';
    }

    switch (Math.ceil(riskScore)) {
        case 10:
            return '#800026';
        case 9:
            return '#bd0026';
        case 8:
            return '#e31a1c';
        case 7:
            return '#fc4e2a';
        case 6:
            return '#fd8d3c';
        case 5:
            return '#feb24c';
        case 4:
            return '#fed976';
        case 3:
            return '#ffeda0';
        case 2:
            return '#ffffcc';
        case 1:
        case 0:
            return '#ffffff';
        default:
            return '#aaaaaa';
    }
}
