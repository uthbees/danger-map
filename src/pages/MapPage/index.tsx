import './map.css';
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    Paper,
    Stack,
} from '@mui/material';
import useInitialSetup from '../../utils/useInitialSetup';
import setupMap from './functions/setupMap';
import { RiskFactorEnabledStatuses } from './types';
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';

export default function MapPage() {
    const [riskFactors, setRiskFactors] = useState<RiskFactorEnabledStatuses>({
        carCrashFrequency: true,
        carCrashFatalities: true,
    });
    const mapObj = useRef<L.Map>(null);

    useInitialSetup(() => {
        mapObj.current = L.map('map').setView([37.8, -96], 4);
    });

    useEffect(() => {
        setupMap(riskFactors);
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
