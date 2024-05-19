import * as weather from './api/weather';
import * as dom from './dom/dom';
import './css/style.css';

const data = await weather.getCurrent('auto:ip');

dom.display(data);
dom.addEvents();

// weather.search('Buch');
