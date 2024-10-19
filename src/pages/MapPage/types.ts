export interface CountyData {
    COUNTYNAME: string;
    STATENAME: string;
    POPULATION: number;
    FATALS: number; // Total fatalities/serious injuries from car crashes.
    TOTAL_INCIDENTS: number; // Total car crashes.
}

export interface RiskFactorEnabledStatuses {
    carCrashFrequency: boolean;
    carCrashFatalities: boolean;
}
