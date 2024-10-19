import './map.css';
import { Paper, Stack } from '@mui/material';
import counties from './counties.json';
import states from './us-states.json'; // Import state boundaries GeoJSON file
import useInitialSetup from '../../utils/useInitialSetup';
import setupMap from './functions/setupMap';

export default function MapPage() {
    useInitialSetup(() => {
        setupMap();
    });

    return (
        <Stack direction="row" style={{ height: '100%' }}>
            <Paper
                style={{
                    height: '100%',
                    minWidth: '250px',
                    backgroundColor: 'white',
                }}
                elevation={6}
                square
            ></Paper>
            <div id="map" />
        </Stack>
    );
}
