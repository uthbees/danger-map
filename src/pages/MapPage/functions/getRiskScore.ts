import { CountyData } from '../types';

export default function getRiskScore(countyData: CountyData | undefined) {
    if (countyData === undefined) {
        return undefined;
    }

    return (
        (getCarCrashInjuryScore(countyData) +
            getCarCrashFrequencyScore(countyData)) /
        2
    );
}

function getCarCrashInjuryScore(countyData: CountyData) {
    const carCrashInjuriesPer100_000 =
        (countyData.TOTAL_FATALS / countyData.POPULATION) * 100_000;

    // TODO
    return Math.random() * 10;
}

function getCarCrashFrequencyScore(countyData: CountyData) {
    const carCrashesPer100_000 =
        (countyData.TOTAL_INCIDENTS / countyData.POPULATION) * 100_000;

    // TODO
    return Math.random() * 10;
}
