import DatabaseManager from './database/DatabaseManager';

const db = new DatabaseManager('WeatherApp', {
    data: {
        location: '',
    },
    settings: {
        api: {
            // name: {url, apiKey}
        },
        unit: 'Celsius',
        notifications: false,
        theme: 'auto',
    },
});

db.create();
