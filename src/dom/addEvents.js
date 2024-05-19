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

export default function addEvents() {
    const input = document.querySelector('.weather__input');
    input.addEventListener('keydown', inputHandler);
}
