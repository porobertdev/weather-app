import * as weather from './api/weather';
import * as dom from './dom/dom';
import './css/style.css';

const data = await weather.getCurrent('Bucharest');
console.log(data);

dom.display(data);
dom.addEvents();

// weather.search('Buch');
