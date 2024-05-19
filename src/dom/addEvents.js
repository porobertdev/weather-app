import getCurrent from '../api/getCurrent';
import display from './display';

async function inputHandler(event) {
    if (event.key == 'Enter') {
        if (event.target.value != '') {
            const data = await getCurrent(event.target.value);
            display(data);

            // clear once the search is done
            event.target.value = '';
        }
    }
}

function gpsHandler(event) {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const data = await getCurrent(
                `${position.coords.latitude},${position.coords.longitude}`
            );
            display(data);
        },
        (error) => {
            alert(error.message);
        }
    );
}

export default function addEvents() {
    const input = document.querySelector('.weather__input');
    input.addEventListener('keydown', inputHandler);

    const gps = document.querySelector('.weather__gps');
    gps.addEventListener('click', gpsHandler);
}
