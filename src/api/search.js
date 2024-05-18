import fetchUrl from './fetchUrl';

export default async function search(city) {
    const arr = await fetchUrl(`search.json?q=${city}`);
    console.log(arr);
}
