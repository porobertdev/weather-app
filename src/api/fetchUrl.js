import apiKey from './apiKey';

const baseUrl = 'https://api.weatherapi.com/v1/';

export default async function fetchUrl(url) {
    try {
        const response = await fetch(`${baseUrl}${url}&key=${apiKey}`);

        // if (response.ok) {
        return response.json();
        // }
    } catch (err) {
        console.log('Error occured:', err);
    }
}
