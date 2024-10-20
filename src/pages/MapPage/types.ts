export interface CountyData {
    countyName: string;
    stateName: string;
    population: number;
    carCrashHospitalizations?: number;
    carCrashes?: number;
    robberies?: number;
    larcenies?: number;
    burglaries?: number;
    mvthefts?: number;
    assaults?: number;
    arson?: number;
    rapes?: number;
    murders?: number;
    earthquakesMagnitudesSum?: number;
    nationalFireRiskScore?: number;
}

export interface CountyCarData {
    COUNTYNAME: string;
    STATENAME: string;
    POPULATION: number;
    FATALS?: number; // Total fatalities/serious injuries from car crashes.
    TOTAL_INCIDENTS?: number; // Total car crashes.
}

export interface CountyCrimeData {
    county: string;
    state_name: string;
    robbery: number;
    larceny: number;
    burglary: number;
    mvtheft: number;
    assault: number;
    arson: number;
    rape: number;
    murder: number;
}

export interface CountyEarthquakeData {
    county_name: string;
    state_name: string;
    mag: number;
}

export interface CountyFireData {
    county_name: string;
    state_name: string;
    national_risk_score?: number;
}

export interface RiskFactorEnabledStatuses {
    carCrashFrequency: boolean;
    carCrashFatalities: boolean;
    robberies: boolean;
    larcenies: boolean;
    burglaries: boolean;
    motorVehicleThefts: boolean;
    assaults: boolean;
    arson: boolean;
    rape: boolean;
    murder: boolean;
    wildfires: boolean;
    earthquakes: boolean;
}
