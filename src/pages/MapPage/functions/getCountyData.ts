import { CountyData } from '../types';
import counties_car_data from '../../../counties_car_data.json';
export default function getCountyData(
    countyName: string,
    stateCode: string,
): CountyData | undefined {
    const stateName = fipsStateLookup[stateCode];
    if (stateName === undefined) {
        const errorMessage = `Invalid FIPS code: ${stateCode}`;
        alert(errorMessage);
        throw new Error(errorMessage);
    }

    const lowercaseCountyName = countyName.toLowerCase();
    const lowercaseStateName = stateName.toLowerCase();

    return counties_car_data.find(
        (countyData: CountyData) =>
            countyData.COUNTYNAME.toLowerCase() === lowercaseCountyName &&
            countyData.STATENAME.toLowerCase() === lowercaseStateName,
    );
}

// https://www.bls.gov/respondents/mwr/electronic-data-interchange/appendix-d-usps-state-abbreviations-and-fips-codes.htm
const fipsStateLookup: Record<string, string> = {
    '01': 'Alabama',
    '02': 'Alaska',
    '04': 'Arizona',
    '05': 'Arkansas',
    '06': 'California',
    '08': 'Colorado',
    '09': 'Connecticut',
    '10': 'Delaware',
    '11': 'District of Columbia',
    '12': 'Florida',
    '13': 'Georgia',
    '15': 'Hawaii',
    '16': 'Idaho',
    '17': 'Illinois',
    '18': 'Indiana',
    '19': 'Iowa',
    '20': 'Kansas',
    '21': 'Kentucky',
    '22': 'Louisiana',
    '23': 'Maine',
    '24': 'Maryland',
    '25': 'Massachusetts',
    '26': 'Michigan',
    '27': 'Minnesota',
    '28': 'Mississippi',
    '29': 'Missouri',
    '30': 'Montana',
    '31': 'Nebraska',
    '32': 'Nevada',
    '33': 'New Hampshire',
    '34': 'New Jersey',
    '35': 'New Mexico',
    '36': 'New York',
    '37': 'North Carolina',
    '38': 'North Dakota',
    '39': 'Ohio',
    '40': 'Oklahoma',
    '41': 'Oregon',
    '42': 'Pennsylvania',
    '44': 'Rhode Island',
    '45': 'South Carolina',
    '46': 'South Dakota',
    '47': 'Tennessee',
    '48': 'Texas',
    '49': 'Utah',
    '50': 'Vermont',
    '51': 'Virginia',
    '53': 'Washington',
    '54': 'West Virginia',
    '55': 'Wisconsin',
    '56': 'Wyoming',
    '72': 'Puerto Rico',
    '78': 'Virgin Islands',
};
