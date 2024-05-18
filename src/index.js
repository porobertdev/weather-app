import * as weather from './api/weather';
import * as dom from './dom/dom';

const data = await weather.getCurrent('Bucharest');
console.log(data);

dom.display(data);

// weather.search('Buch');
