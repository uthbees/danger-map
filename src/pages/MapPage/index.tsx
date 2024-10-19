import './map.css';
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Paper,
    Stack,
} from '@mui/material';
import useInitialSetup from '../../utils/useInitialSetup';
import { RiskFactorEnabledStatuses } from './types';
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import initializeMap from './functions/initializeMap';
import buildCountiesLayer from './functions/buildCountiesLayer';

export default function MapPage() {
    const [riskFactors, setRiskFactors] = useState<RiskFactorEnabledStatuses>({
        carCrashFrequency: true,
        carCrashFatalities: true,
    });
    const map = useRef<L.Map | null>(null);
    const countiesLayer = useRef<L.Layer | null>(null);
    const statesLayer = useRef<L.Layer | null>(null);

    useInitialSetup(() => {
        const { map: localMap, statesLayer: localStatesLayer } =
            initializeMap(riskFactors);
        map.current = localMap;
        statesLayer.current = localStatesLayer;
    });

    useEffect(() => {
        if (map === null) {
            const message = 'Map not initialized!';
            alert(message);
            throw new Error(message);
        }

        countiesLayer.current?.remove();
        countiesLayer.current = buildCountiesLayer(riskFactors).addTo(
            map.current,
        );

        // Add the states layer on top of the counties layer.
        statesLayer.current?.remove();
        statesLayer.current.addTo(map.current);
    }, [riskFactors]);

    return (
        <Stack direction="row" style={{ height: '100%' }}>
            <Paper
                style={{
                    height: '100%',
                    minWidth: '250px',
                    backgroundColor: 'white',
                    padding: '16px',
                }}
                elevation={6}
                square
            >
                Enabled risk factors
                <br />
                <br />
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.carCrashFrequency}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        carCrashFrequency: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Car crash frequency"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.carCrashFatalities}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        carCrashFatalities: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Injuries/fatalities from car crashes"
                    />
                </FormGroup>
            </Paper>
            <div id="map" />
        </Stack>
    );
}
