import fetchUrl from './fetchUrl';

export default async function getLocation() {
    const data = await fetchUrl('ip.json?q=auto:ip');
    console.log(data);

    return `${data.city}, ${data.country_code}`;
}
