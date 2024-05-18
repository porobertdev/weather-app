/* eslint-disable prefer-destructuring */
import getAirQuality from './getAirQuality';

export default function parseData(data) {
    const location = data.location;
    const current = data.current;

    return {
        location: {
            city: location.name,
            country: location.country,
        },
        air_quality: getAirQuality(current.air_quality['us-epa-index']),
        humidity: `${current.humidity}`,
        temp: current.temp_c,
        feelslike: current.feelslike_c,
        wind_speed: current.wind_kph,
        wind_direction: current.wind_dir,
        wind_deg: current.wind_degree,
        icon: {
            text: current.condition.text,
            url: current.condition.icon.split('//')[1],
        },
    };
}
