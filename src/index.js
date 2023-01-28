import css from './styles.css';
import * as utils from './utils';

function fetchData(location) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c623d6c1dc938ebc64fffc73f94df621&units=metric`, {mode: 'cors'}) 
}

/*function processData(weatherData) {
    return weatherData.then(function(response) {
        return response.json();
    })
    .then(function(response) {
        return response;
    });
}*/

async function processData(weatherData) {
    const response = await weatherData;
    const jsonData = await response.json();
    return jsonData;
}

const weatherData = fetchData("Sydney");
const weather = processData(weatherData);
weather.then(function(data) {
    const title = document.querySelector(".title");
    const location = document.querySelector(".location");
    const date = document.querySelector(".date");
    const temperature = document.querySelector(".temperature");
    const currentWeather = document.querySelector(".currentWeather");

    const feelsLike = document.querySelector("#feelsLike");
    const humidity = document.querySelector("#humidity");
    const chanceOfRain = document.querySelector("#chanceOfRain");
    const windSpeed = document.querySelector("#windSpeed");
    console.log(data);
    
    title.innerHTML = capitalize(data.weather[0].description);
    location.innerHTML = capitalize(data.name);
    date.innerHTML = getDateByTimezone(data.timezone);
    temperature.innerHTML = data.main.temp + " °C";
    currentWeather.innerHTML = utils.getIcon(data.weather[0].icon);

    feelsLike.innerHTML = data.main.feels_like;
    humidity.innerHTML = data.main.humidity + " %";
    //chanceOfRain.innerHTML = data;
    windSpeed.innerHTML = data.wind.speed + " km/h";
});

function capitalize(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

function getDateByTimezone(timezone) {
    // Get current date and time
    const date = new Date();

    // Offset the date by the timezone
    date.setTime(date.getTime() + (timezone * 1000));

    // Get day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date.getUTCDay()];

    // Get month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[date.getUTCMonth()];

    // Get date
    const dateNumber = date.getUTCDate();
    let dateSuffix = "th";
    if (dateNumber === 1 || dateNumber === 21 || dateNumber === 31) {
        dateSuffix = "st";
    } else if (dateNumber === 2 || dateNumber === 22) {
        dateSuffix = "nd";
    } else if (dateNumber === 3 || dateNumber === 23) {
        dateSuffix = "rd";
    }

    // Get year
    const year = date.getUTCFullYear().toString().slice(-2);

    // Get hours and minutes
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let ampm = "am";
    if (hours > 12) {
        hours = hours - 12;
        ampm = "pm";
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Return the date and time
    return `${day}, ${dateNumber}${dateSuffix} ${month} '${year} 
    ${hours}:${minutes} ${ampm}`;
}
