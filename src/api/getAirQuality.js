// As per API's documentation: https://www.weatherapi.com/docs/#:~:text=us%2Depa%2Dindex,6%20means%20Hazardous
const quality = {
    1: {
        name: 'Good',
        color: 'green',
    },
    2: {
        name: 'Moderate',
        color: 'light-green',
    },
    3: {
        name: 'Unhealthy for sensitive group',
        color: 'light-yellow',
    },
    4: {
        name: 'Unhealthy',
        color: 'yellow',
    },
    5: {
        name: 'Very Unhealthy',
        color: 'orange',
    },
    6: {
        name: 'Hazardous',
        color: 'red',
    },
};

export default function getAirQuality(index) {
    return quality[index];
}
