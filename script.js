// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = 'd54416bba64ceee1b9d56a995e1d409e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

//Elements
const getLocation = document.getElementById("location-input");
const getWeather = document.getElementById("get-weather");
const displayWeather = document.getElementById("weather-display");

//Fetch and display data
async function fectWeather() {
    const inputLocation = getLocation.value;
    const url = `${apiUrl}?q=${inputLocation}&apikey=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        const city = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        displayWeather.innerHTML = `The Weather of ${city} is: ${temperature}°C, ${description}`;
    } catch (error) {
        console.error("Error Fetching Data", error);
        displayWeather.innerHTML = "Error Fetching data, Please Try again";
    }
}
//Event Listener
getWeather.addEventListener("click", fectWeather);