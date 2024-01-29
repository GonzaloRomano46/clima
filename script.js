function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
    const apiKey = 'fd49804973dbfe837158979087490853';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');

            if (data.cod === '404') {
                weatherInfo.innerHTML = `<p>No se encontró información para ${cityName}</p>`;
            } else {
                const temperature = data.main.temp;
                const weatherDescription = translateWeather(data.weather[0].description);

                weatherInfo.innerHTML = `<p>El clima en ${cityName} es ${weatherDescription} con una temperatura de ${temperature}°C</p>`;
            }
        })
        .catch(error => {
            console.error('Error al obtener datos del clima:', error);
            alert('Hubo un error al obtener los datos del clima. Por favor, intenta de nuevo más tarde.');
        });
}
function translateWeather(description) {
    const translations = {
        'clear sky': 'cielo despejado',
        'few clouds': 'pocas nubes',
        'scattered clouds': 'nubes dispersas',
        'broken clouds': 'nublado',
        'shower rain': 'llovizna',
        'rain': 'lluvia',
        'thunderstorm': 'tormenta',
        'snow': 'nieve',
        'mist': 'niebla',
        'overcast clouds': 'completamente nublado',
    };

    return translations[description] || description;
}

