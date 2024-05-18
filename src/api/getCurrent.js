import fetchUrl from './fetchUrl';
import parseData from './parseData';

export default async function getCurrent(city) {
    // it includes forecast
    const data = await fetchUrl(`current.json?q=${city}&aqi=yes`);

    return parseData(data);
}
