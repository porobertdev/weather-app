import DatabaseManager from './database/DatabaseManager';
import * as weather from './api/weather';

const db = new DatabaseManager('WeatherApp', {
    data: {
        location: '',
    },
    settings: {
        api: {
            // name: {url, apiKey}
        },
        unit: 'metric',
        notifications: false,
        theme: 'auto',
    },
});

db.create();

const data = await weather.getCurrent('Bucharest');
console.log(data);

// weather.search('Buch');

export default db;
