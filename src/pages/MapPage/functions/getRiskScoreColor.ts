export default function getRiskScoreColor(riskScore: number | undefined) {
    if (riskScore === undefined || riskScore < 0) {
        return '#aaaaaa';
    }

    switch (Math.ceil(riskScore)) {
        case 10:
            return '#500026';
        case 9:
            return '#800026';
        case 8:
            return '#bd0026';
        case 7:
            return '#e31a1c';
        case 6:
            return '#fc4e2a';
        case 5:
            return '#fd8d3c';
        case 4:
            return '#feb24c';
        case 3:
            return '#fed976';
        case 2:
            return '#ffeda0';
        case 1:
        case 0:
            return '#ffffcc';
        default:
            return '#500026';
    }
}
