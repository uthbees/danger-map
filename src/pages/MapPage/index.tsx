import './leaflet.css';
import { Paper, Stack } from '@mui/material';
import counties from './counties.json';
import useInitialSetup from '../../utils/useInitialSetup';
import L from 'leaflet';
import { GeoJsonObject } from 'geojson';

export default function MapPage() {
    useInitialSetup(() => {
        // Initialize the map centered on the USA
        const map = L.map('map').setView([37.8, -96], 4);
        console.log(map);

        // Add a base layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Create a GeoJSON layer and add it to the map
        L.geoJSON(counties as unknown as GeoJsonObject[], {
            style: function (feature) {
                return {
                    fillColor: getColor(feature?.properties?.score), // Use the score property
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7,
                };
            },
            onEachFeature: function (feature, layer) {
                // Attach a popup with county information
                if (feature.properties && feature.properties.NAME) {
                    layer.bindPopup(
                        'County: ' +
                            feature.properties.NAME +
                            '<br>GEOID: ' +
                            feature.properties.GEOID,
                    );
                }
            },
        }).addTo(map);

        // Legend code goes here
        const legend = (L.control as any)({ position: 'bottomright' });

        legend.onAdd = function (map: any) {
            const div = L.DomUtil.create('div', 'info legend'),
                grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                labels = [];

            // Loop through the grades and generate a label with a colored square

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
    });

    return (
        <Stack
            direction="row"
            style={{ height: '100%', backgroundColor: 'green' }}
        >
            <Paper
                style={{
                    height: '100%',
                    minWidth: '250px',
                    backgroundColor: 'white',
                }}
                elevation={6}
                square
            ></Paper>
            <div id="map">Map</div>
        </Stack>
    );
}

// Function to get color based on score
function getColor(score: number | undefined) {
    return score === 10
        ? '#800026'
        : score === 9
          ? '#bd0026'
          : score === 8
            ? '#e31a1c'
            : score === 7
              ? '#fc4e2a'
              : score === 6
                ? '#fd8d3c'
                : score === 5
                  ? '#feb24c'
                  : score === 4
                    ? '#fed976'
                    : score === 3
                      ? '#ffeda0'
                      : score === 2
                        ? '#ffffcc'
                        : score === 1
                          ? '#ffffff'
                          : '#FFFFFF'; // Removed default color to avoid extra square
}
