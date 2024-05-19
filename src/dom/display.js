import { html, render } from '@github/jtml';

export default function display(data) {
    console.log('🚀 ~ display ~ data:', data);

    render(
        html`
            <div class="weather">
                <div class="weather__search">
                    <input
                        class="weather__input"
                        type="text"
                        id="search"
                        placeholder="Type a city, country or coordinates"
                        autofocus
                    />
                    <img
                        class="weather__gps"
                        src="../assets/location.svg"
                        alt=""
                    />
                </div>

                ${data.error
                    ? html`
                          <p class="weather__error">${data.error.message}</p>
                      `
                    : html` <div class="weather__info">
                          <div class="weather__info_main">
                              <img
                                  class="condition-icon"
                                  src="${data.icon.url}"
                              />
                              <div class="location">
                                  <p class="location__name">
                                      ${data.location.city},
                                      ${data.location.country}
                                  </p>
                                  <p class="location__temp">
                                      ${data.temp}&deg; C
                                  </p>
                              </div>
                          </div>

                          <div class="weather__info_details">
                              <p class="real-feel">
                                  <span class="bold">Real Feel</span>:
                                  ${data.feelslike}&deg;
                              </p>
                              <p class="air-quality">
                                  <span class="bold">Air Quality</span>:
                                  ${data.air_quality.name}
                                  <span
                                      class="air-quality__circle ${data
                                          .air_quality.color}"
                                  ></span>
                              </p>
                              <p class="wind">
                                  <span class="bold">Wind</span>:
                                  ${data.wind_speed} km/h ${data.wind_direction}
                                  <img
                                      class="wind__direction"
                                      src="../assets/arrow.svg"
                                      style="transform: rotate(${data.wind_deg}deg)"
                                  />
                              </p>
                              <p class="humidity">
                                  <span class="bold">Humidity</span>:
                                  ${data.humidity}%
                              </p>
                          </div>
                      </div>`}
            </div>
        `,
        document.body
    );
}
