import { html, render } from '@github/jtml';

export default function display(data) {
    render(
        html`
            <div class="weather">
                <input
                    class="weather__input"
                    type="text"
                    id="search"
                    placeholder="Type a city"
                />

                <div class="weather__info">
                    <div class="weather__info_main">
                        <img class="condition-icon" src="${data.icon.url}" />
                        <div class="location">
                            <p class="location__name">
                                ${data.location.city}, ${data.location.country}
                            </p>
                            <p class="location__temp">${data.temp} ° C</p>
                        </div>
                    </div>

                    <div class="weather__info_details">
                        <p class="real-feel"></p>
                        <p class="air-quality">Air Quality: ${data.air_quality.name}</p>
                        <p class="wind">Wind: ${data.wind_speed} km/h</p>
                        <p class="humidity">Humidity: ${data.humidity}%</p>
                    </div>
                </div>
            </div>
        `,
        document.body
    );
}
