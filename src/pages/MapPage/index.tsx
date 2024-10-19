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
        robberies: true,
        larcenies: true,
        burglaries: true,
        motorVehicleThefts: true,
        assaults: true,
        arson: true,
        rape: true,
        murder: true,
        wildfires: true,
        earthquakes: true,
    });
    const map = useRef<L.Map | null>(null);
    const countiesLayer = useRef<L.Layer | null>(null);
    const statesLayer = useRef<L.Layer | null>(null);

    useInitialSetup(() => {
        const { map: localMap, statesLayer: localStatesLayer } =
            initializeMap();
        map.current = localMap;
        statesLayer.current = localStatesLayer;
    });

    useEffect(() => {
        if (map.current === null) {
            const message = 'Map not initialized!';
            alert(message);
            throw new Error(message);
        }
        if (statesLayer.current === null) {
            const message = 'States layer not initialized!';
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

    const allCarCrashRisksEnabled =
        riskFactors.carCrashFrequency && riskFactors.carCrashFatalities;
    const allCrimeRisksEnabled =
        riskFactors.robberies &&
        riskFactors.larcenies &&
        riskFactors.burglaries &&
        riskFactors.motorVehicleThefts &&
        riskFactors.assaults &&
        riskFactors.arson &&
        riskFactors.rape &&
        riskFactors.murder;
    const allNaturalDisastersEnabled =
        riskFactors.wildfires && riskFactors.earthquakes;

    return (
        <Stack direction="row" style={{ overflow: 'auto' }}>
            <Paper
                style={{
                    height: '100%',
                    minWidth: '300px',
                    backgroundColor: 'white',
                    padding: '16px',
                    overflow: 'scroll',
                }}
                elevation={6}
                square
            >
                <b>Enabled risk factors</b>
                <br />
                <br />
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={allCrimeRisksEnabled}
                                indeterminate={
                                    !allCrimeRisksEnabled &&
                                    (riskFactors.robberies ||
                                        riskFactors.larcenies ||
                                        riskFactors.burglaries ||
                                        riskFactors.motorVehicleThefts ||
                                        riskFactors.assaults ||
                                        riskFactors.arson ||
                                        riskFactors.rape ||
                                        riskFactors.murder)
                                }
                                onChange={() => {
                                    if (allCrimeRisksEnabled) {
                                        setRiskFactors((prevState) => ({
                                            ...prevState,
                                            robberies: false,
                                            larcenies: false,
                                            burglaries: false,
                                            motorVehicleThefts: false,
                                            assaults: false,
                                            arson: false,
                                            rape: false,
                                            murder: false,
                                        }));
                                    } else {
                                        setRiskFactors((prevState) => ({
                                            ...prevState,
                                            robberies: true,
                                            larcenies: true,
                                            burglaries: true,
                                            motorVehicleThefts: true,
                                            assaults: true,
                                            arson: true,
                                            rape: true,
                                            murder: true,
                                        }));
                                    }
                                }}
                            />
                        }
                        label="Violent crime"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.robberies}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        robberies: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Robberies"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.larcenies}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        larcenies: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Larcenies"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.burglaries}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        burglaries: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Burglaries"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.motorVehicleThefts}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        motorVehicleThefts: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Motor vehicle thefts"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.assaults}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        assaults: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Assaults"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.arson}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        arson: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Arson"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.rape}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        rape: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Rapes"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.murder}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        murder: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Murders"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={allCarCrashRisksEnabled}
                                indeterminate={
                                    !allCarCrashRisksEnabled &&
                                    (riskFactors.carCrashFrequency ||
                                        riskFactors.carCrashFatalities)
                                }
                                onChange={() => {
                                    if (allCarCrashRisksEnabled) {
                                        setRiskFactors((prevState) => ({
                                            ...prevState,
                                            carCrashFrequency: false,
                                            carCrashFatalities: false,
                                        }));
                                    } else {
                                        setRiskFactors((prevState) => ({
                                            ...prevState,
                                            carCrashFrequency: true,
                                            carCrashFatalities: true,
                                        }));
                                    }
                                }}
                            />
                        }
                        label="Car crashes"
                    />
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
                        className="indented"
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
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={allNaturalDisastersEnabled}
                                indeterminate={
                                    !allNaturalDisastersEnabled &&
                                    (riskFactors.wildfires ||
                                        riskFactors.earthquakes)
                                }
                                onChange={() => {
                                    if (allNaturalDisastersEnabled) {
                                        setRiskFactors((prevState) => ({
                                            ...prevState,
                                            wildfires: false,
                                            earthquakes: false,
                                        }));
                                    } else {
                                        setRiskFactors((prevState) => ({
                                            ...prevState,
                                            wildfires: true,
                                            earthquakes: true,
                                        }));
                                    }
                                }}
                            />
                        }
                        label="Natural disasters"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.wildfires}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        wildfires: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Wildfires"
                        className="indented"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={riskFactors.earthquakes}
                                onChange={(e) =>
                                    setRiskFactors((prevState) => ({
                                        ...prevState,
                                        earthquakes: e.target.checked,
                                    }))
                                }
                            />
                        }
                        label="Earthquakes"
                        className="indented"
                    />
                </FormGroup>
            </Paper>
            <div id="map" />
        </Stack>
    );
}
