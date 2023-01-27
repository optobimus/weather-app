import css from './styles.css';


function fetchData(location) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c623d6c1dc938ebc64fffc73f94df621`, {mode: 'cors'}) 
}

function processData(weatherData) {
    weatherData.then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    });
}

const weatherData = fetchData("Brixen");
processData(weatherData);