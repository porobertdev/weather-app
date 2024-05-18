import * as weather from './api/weather';

const data = await weather.getCurrent('Bucharest');
console.log(data);

// weather.search('Buch');
