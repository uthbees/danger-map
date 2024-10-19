import { CountyData, RiskFactorEnabledStatuses } from '../types';

export default function getRiskScore(
    countyData: CountyData | undefined,
    riskFactors: RiskFactorEnabledStatuses,
) {
    if (countyData === undefined) {
        return undefined;
    }

    return getCarCrashesSubtotal(countyData, riskFactors);
}

function getCarCrashesSubtotal(
    countyData: CountyData,
    riskFactors: RiskFactorEnabledStatuses,
) {
    let enabledRiskFactors = 0;
    let enabledRiskScoresSum = 0;

    if (riskFactors.carCrashFatalities) {
        const score = getCarCrashInjuryScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 1.5;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.carCrashFrequency) {
        const score = getCarCrashFrequencyScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors++;
            enabledRiskScoresSum += score;
        }
    }

    if (enabledRiskFactors === 0) {
        return undefined;
    }
    return enabledRiskScoresSum / enabledRiskFactors;
}

function getCarCrashInjuryScore(countyData: CountyData) {
    if (countyData.FATALS === undefined) {
        return undefined;
    }

    const carCrashInjuriesPer100_000 =
        (countyData.FATALS / countyData.POPULATION) * 100_000;

    return Math.pow(5 * carCrashInjuriesPer100_000, 0.3125);
}

function getCarCrashFrequencyScore(countyData: CountyData) {
    if (countyData.TOTAL_INCIDENTS === undefined) {
        return undefined;
    }

    const carCrashesPer100_000 =
        (countyData.TOTAL_INCIDENTS / countyData.POPULATION) * 100_000;

    return Math.pow(5.3 * carCrashesPer100_000, 0.334);
}
