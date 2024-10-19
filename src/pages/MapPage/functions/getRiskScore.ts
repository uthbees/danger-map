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

    const carCrashesSubtotal = getCarCrashesSubtotal(countyData, riskFactors);
    if (carCrashesSubtotal !== undefined) {
        enabledRiskFactors += 1;
        enabledRiskScoresSum += carCrashesSubtotal;
    }
    const crimeSubtotal = getCrimeSubtotal(countyData, riskFactors);
    if (crimeSubtotal !== undefined) {
        enabledRiskFactors += 1.5;
        enabledRiskScoresSum += crimeSubtotal;
    }
    const naturalDisastersSubtotal = getNaturalDisasterSubtotal(
        countyData,
        riskFactors,
    );
    if (naturalDisastersSubtotal !== undefined) {
        enabledRiskFactors += 1;
        enabledRiskScoresSum += naturalDisastersSubtotal;
    }

    if (enabledRiskFactors === 0) {
        return undefined;
    }

    return enabledRiskScoresSum / enabledRiskFactors;
}

function getCrimeSubtotal(
    countyData: CountyData,
    riskFactors: RiskFactorEnabledStatuses,
) {
    let enabledRiskFactors = 0;
    let enabledRiskScoresSum = 0;

    if (riskFactors.robberies) {
        const score = getRobberiesScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 1;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.larcenies) {
        const score = getLarceniesScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 1.5;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.burglaries) {
        const score = getBurglariesScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 2;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.motorVehicleThefts) {
        const score = getMotorVehicleTheftsScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 2;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.assaults) {
        const score = getAssaultsScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 3;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.arson) {
        const score = getArsonScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 3;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.rape) {
        const score = getRapeScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 4;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.murder) {
        const score = getMurderScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 5;
            enabledRiskScoresSum += score;
        }
    }

    if (enabledRiskFactors === 0) {
        return undefined;
    }
    return enabledRiskScoresSum / enabledRiskFactors;
}

function getRobberiesScore(countyData: CountyData) {
    if (countyData.robberies === undefined) {
        return undefined;
    }

    const robberiesPer100_000 =
        (countyData.robberies / countyData.population) * 100_000;

    return Math.pow(7 * robberiesPer100_000, 0.334);
}

function getLarceniesScore(countyData: CountyData) {
    if (countyData.larcenies === undefined) {
        return undefined;
    }

    const larceniesPer100_000 =
        (countyData.larcenies / countyData.population) * 100_000;

    return Math.pow(larceniesPer100_000, 0.334);
}

function getBurglariesScore(countyData: CountyData) {
    if (countyData.burglaries === undefined) {
        return undefined;
    }

    const burglariesPer100_000 =
        (countyData.burglaries / countyData.population) * 100_000;

    return Math.pow(5.3 * burglariesPer100_000, 0.334);
}

function getMotorVehicleTheftsScore(countyData: CountyData) {
    if (countyData.mvthefts === undefined) {
        return undefined;
    }

    const mvtheftsPer100_000 =
        (countyData.mvthefts / countyData.population) * 100_000;

    return Math.pow(12 * mvtheftsPer100_000, 0.334);
}

function getAssaultsScore(countyData: CountyData) {
    if (countyData.assaults === undefined) {
        return undefined;
    }

    const assaultsPer100_000 =
        (countyData.assaults / countyData.population) * 100_000;

    return Math.pow(30 * assaultsPer100_000, 0.334);
}

function getArsonScore(countyData: CountyData) {
    if (countyData.arson === undefined) {
        return undefined;
    }

    const arsonPer100_000 =
        (countyData.arson / countyData.population) * 100_000;

    return Math.pow(200 * arsonPer100_000, 0.334);
}

function getRapeScore(countyData: CountyData) {
    if (countyData.rapes === undefined) {
        return undefined;
    }

    const rapesPer100_000 =
        (countyData.rapes / countyData.population) * 100_000;

    return Math.pow(200 * rapesPer100_000, 0.334);
}

function getMurderScore(countyData: CountyData) {
    if (countyData.murders === undefined) {
        return undefined;
    }

    const murdersPer100_000 =
        (countyData.murders / countyData.population) * 100_000;

    return Math.pow(3000 * murdersPer100_000, 0.334);
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
            enabledRiskFactors += 1;
            enabledRiskScoresSum += score;
        }
    }

    if (enabledRiskFactors === 0) {
        return undefined;
    }
    return enabledRiskScoresSum / enabledRiskFactors;
}

function getCarCrashInjuryScore(countyData: CountyData) {
    if (countyData.carCrashHospitalizations === undefined) {
        return undefined;
    }

    const carCrashInjuriesPer100_000 =
        (countyData.carCrashHospitalizations / countyData.population) * 100_000;

    return Math.pow(5 * carCrashInjuriesPer100_000, 0.3125);
}

function getCarCrashFrequencyScore(countyData: CountyData) {
    if (countyData.carCrashes === undefined) {
        return undefined;
    }

    const carCrashesPer100_000 =
        (countyData.carCrashes / countyData.population) * 100_000;

    return Math.pow(5.3 * carCrashesPer100_000, 0.334);
}

function getNaturalDisasterSubtotal(
    countyData: CountyData,
    riskFactors: RiskFactorEnabledStatuses,
) {
    let enabledRiskFactors = 0;
    let enabledRiskScoresSum = 0;

    if (riskFactors.wildfires) {
        const score = getWildfiresScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 1.15;
            enabledRiskScoresSum += score;
        }
    }
    if (riskFactors.earthquakes) {
        const score = getEarthquakesScore(countyData);
        if (score !== undefined) {
            enabledRiskFactors += 1;
            enabledRiskScoresSum += score;
        }
    }

    if (enabledRiskFactors === 0) {
        return undefined;
    }
    return enabledRiskScoresSum / enabledRiskFactors;
}

function getWildfiresScore(countyData: CountyData) {
    if (countyData.nationalFireRiskScore === undefined) {
        return undefined;
    }

    return countyData.nationalFireRiskScore * 10;
}

function getEarthquakesScore(countyData: CountyData) {
    if (countyData.earthquakesMagnitudesSum === undefined) {
        return undefined;
    }

    return Math.pow(5.3 * countyData.earthquakesMagnitudesSum, 0.334);
}
