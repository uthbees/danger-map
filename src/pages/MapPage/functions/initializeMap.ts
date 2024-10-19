import L from 'leaflet';
import { GeoJsonObject } from 'geojson';
import states from '../us-states.json';
import getRiskScoreColor from './getRiskScoreColor';

export default function initializeMap() {
    const map = L.map('map').setView([37.8, -96], 4);

    // Add a base layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    const legend = (L.control as any)({ position: 'bottomright' });

    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend');
        const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        div.innerHTML += 'Risk score<br/>';

        // Loop through the grades and generate a label with a colored square
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' +
                getRiskScoreColor(grades[i]) +
                '"></i> ' +
                grades[i] +
                '<br>';
        }

        return div;
    };

    legend.addTo(map);

    // Create a GeoJSON layer for state boundaries with a black outline
    const statesLayer = L.geoJSON(states as unknown as GeoJsonObject, {
        style: {
            color: 'black', // Black outline
            weight: 2, // Thickness of the line
            fillOpacity: 0, // No fill, just the outline
        },
        interactive: false,
    });

    return { map, statesLayer };
}
