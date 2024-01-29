function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de OpenWeatherMap
    const apiKey = fd49804973dbfe837158979087490853;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');

            if (data.cod === '404') {
                weatherInfo.innerHTML = `<p>No se encontró información para ${cityName}</p>`;
            } else {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                weatherInfo.innerHTML = `<p>El clima en ${cityName} es ${description} con una temperatura de ${temperature}°C</p>`;
            }
        })
        .catch(error => console.error('Error al obtener datos del clima:', error));
}
