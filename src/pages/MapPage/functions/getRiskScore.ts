import { CountyData, RiskFactorEnabledStatuses } from '../types';

export default function getRiskScore(
    countyData: CountyData | undefined,
    riskFactors: RiskFactorEnabledStatuses,
) {
    if (countyData === undefined) {
        return undefined;
    }

    let enabledRiskFactors = 0;
    let enabledRiskScoresSum = 0;

    if (riskFactors.carCrashFatalities) {
        enabledRiskFactors++;
        enabledRiskScoresSum += getCarCrashInjuryScore(countyData);
    }
    if (riskFactors.carCrashFrequency) {
        enabledRiskFactors++;
        enabledRiskScoresSum += getCarCrashFrequencyScore(countyData);
    }

    if (enabledRiskFactors === 0) {
        return undefined;
    }
    return enabledRiskScoresSum / enabledRiskFactors;
}

function getCarCrashInjuryScore(countyData: CountyData) {
    const carCrashInjuriesPer100_000 =
        (countyData.FATALS / countyData.POPULATION) * 100_000;

    return Math.pow(5 * carCrashInjuriesPer100_000, 0.3125);
}

function getCarCrashFrequencyScore(countyData: CountyData) {
    const carCrashesPer100_000 =
        (countyData.TOTAL_INCIDENTS / countyData.POPULATION) * 100_000;

    // TODO
    return Math.random() * 10;
}
