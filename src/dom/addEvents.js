import getCurrent from '../api/getCurrent';
import display from './display';
import toggleVisibility from './toggleVisibility';

async function inputHandler(event) {
    if (event.key == 'Enter') {
        if (event.target.value != '') {
            toggleVisibility('.weather__loader');
            const data = await getCurrent(event.target.value);
            toggleVisibility('.weather__loader');
            display(data);

            // clear once the search is done
            event.target.value = '';
        }
    }
}

function gpsHandler(event) {
    toggleVisibility('.weather__loader');

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const data = await getCurrent(
                `${position.coords.latitude},${position.coords.longitude}`
            );
            toggleVisibility('.weather__loader');
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
