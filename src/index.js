import css from './styles.css';
import * as utils from './utils';

function fetchWeather(location, units = currentUnit) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c623d6c1dc938ebc64fffc73f94df621&units=${units}`, {mode: 'cors'}) 
}

function fetchForecast(location, units) {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=c623d6c1dc938ebc64fffc73f94df621&units=${units}`);
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

let unit = "";
let currentUnit = "metric";
let dayHourSwitch = "day";

function refresh(query, units) {
    const weatherData = fetchWeather(query, units);
    const weather = processData(weatherData);
    const forecastData = fetchForecast(query, units);
    const forecast = processData(forecastData);

    if (units === "imperial") {
        unit = " °F";
    } else if (units === "metric") {
        unit = " °C";
    }

    weather.then(function(data) {
        const title = document.querySelector(".title");
        const location = document.querySelector(".location");
        const date = document.querySelector(".date");
        const temperature = document.querySelector(".temperature");
        const currentWeather = document.querySelector(".currentWeather");

        const wallpaper = document.querySelector(".background");

    
        const feelsLike = document.querySelector("#feelsLike");
        const humidity = document.querySelector("#humidity");
        const windSpeed = document.querySelector("#windSpeed");
        
        title.innerHTML = utils.capitalize(data.weather[0].description);
        location.innerHTML = utils.capitalize(data.name);
        date.innerHTML = utils.getDateByTimezone(data.timezone);
        temperature.innerHTML = Math.round(data.main.temp* 10) / 10 + unit;
        currentWeather.innerHTML = utils.getIcon(data.weather[0].icon);
    
        feelsLike.innerHTML = Math.round(data.main.feels_like * 10) / 10 + unit;
        humidity.innerHTML = data.main.humidity + " %";
        windSpeed.innerHTML = data.wind.speed + " km/h";

        utils.fetchFirstImageFromGoogle(location.textContent).then(firstImageUrl => {
            console.log(firstImageUrl);
            if (!firstImageUrl) wallpaper.style.backgroundImage = 'url("./static/background.png")';
            wallpaper.style.backgroundImage = `url(${firstImageUrl})`;
        });

        /*utils.fetchFirstImageFromGoogle(location).then(data => {
        if(data.items && data.items.length){
            const firstImageUrl = data.items[0].link;
            document.body.style.backgroundImage = `url(${firstImageUrl})`;
        }
        });*/
          
    });

    forecast.then(function(data) {
        const chanceOfRain = document.querySelector("#chanceOfRain");
        const weekDays = document.querySelectorAll(".weekDay");
        const changeHours = document.querySelector(".change-hours");

        const foreCastLabel = document.querySelector(".foreCastLabel");

        let list = data.list;
        chanceOfRain.innerHTML = data.list[0].pop * 100 + " %";
        let dateString = data.list[0].dt_txt.substring(0, data.list[0].dt_txt.indexOf(" "));
        const futureDays = [];
        const futureHours = [];

        //futureDays.push({date: dateString, maxTemp: data.list[0].main.temp_max, minTemp: data.list[0].main.temp_min});  
        let currentDay = futureDays[0];   
        let icon = null;   
        console.log(data.list);

        let i = 0;
        switch (dayHourSwitch) {
            case "day":
                for (let item of data.list) {
                    if (dateString !== item.dt_txt.substring(0, item.dt_txt.indexOf(" ")) && item.dt_txt.split(" ")[1] === "12:00:00") {
                        icon = item.weather[0].icon;
                        dateString = item.dt_txt.substring(0, item.dt_txt.indexOf(" "));
                        currentDay = {date: dateString, maxTemp: item.main.temp_max, minTemp: item.main.temp_min, icon: icon};
                        futureDays.push(currentDay);
                    }
                }
                for (let day of futureDays) {
                    for (let item of data.list) {
                        if (item.dt_txt.substring(0, item.dt_txt.indexOf(" ")) === day.date) {
                            if (item.main.temp_max > day.maxTemp) {
                                day.maxTemp = item.main.temp_max;
                            }
                            if (item.main.temp_min < day.minTemp) {
                                day.minTemp = item.main.temp_min;
                            }
                        }
                        
                    }
                }
    
                for (let weekDay of weekDays) {
                    weekDay.querySelector(".weekDayTitle").textContent = utils.convertDateToWeekDay(futureDays[i].date);
                    weekDay.querySelector(".temperatureHigh").textContent =  Math.round(futureDays[i].maxTemp * 10) / 10 + unit;
                    weekDay.querySelector(".temperatureLow").textContent =  Math.round(futureDays[i].minTemp * 10) / 10 + unit;
                    weekDay.querySelector(".weatherIcon").innerHTML = utils.getIcon(futureDays[i].icon);
        
                    i++;
                }
                foreCastLabel.textContent = "5-Day Forecast";
                changeHours.style.display = "none";
                break;
            case "hour":

                const currentDot = document.querySelector(".dot-selected");
                let currentPage = currentDot.getAttribute("data-dot");
                i = currentPage * 5 - 5;
                for (let item of data.list) {
                    futureHours.push(item);
                }
        
                for (let weekDay of weekDays) {
                    weekDay.querySelector(".weekDayTitle").textContent = futureHours[i].dt_txt.split(" ")[1].substring(0,5);
                    weekDay.querySelector(".temperatureHigh").textContent =  Math.round(futureHours[i].main.temp_max * 10) / 10 + unit;
                    weekDay.querySelector(".temperatureLow").textContent =  Math.round(futureHours[i].main.temp_min * 10) / 10 + unit;
                    weekDay.querySelector(".weatherIcon").innerHTML = utils.getIcon(futureHours[i].weather[0].icon);
                    i++;
                }
                foreCastLabel.textContent = "3-Hour-Interval Forecast";
                changeHours.style.display = "flex";
                break;
        }
        
    });
}

refresh("New York", "metric");
const searchButton = document.querySelector(".searchButton");
const searchBar = document.querySelector(".searchBar");
const unitSwitch = document.querySelector(".unitSwitch");
const dayButton = document.querySelector(".dailyButton");
const hourButton = document.querySelector(".hourlyButton");
const hourRight = document.querySelector(".change-hours__right");
const hourLeft = document.querySelector(".change-hours__left");

searchButton.addEventListener(("click"), () => {
    refresh(searchBar.value, currentUnit);
    searchBar.value = "";
});

window.addEventListener(("keydown"), (event) => {
    if (event.key === "Enter") {
        refresh(searchBar.value, currentUnit);
        searchBar.value = "";
    } 
});



unitSwitch.addEventListener(("click"), (e) => {
    const currentLocation = document.querySelector(".location").textContent;
    if (unitSwitch.textContent === "Display °F") {
        currentUnit = "imperial";
        unitSwitch.textContent = "Display °C";
    } else {
        currentUnit = "metric";
        unitSwitch.textContent = "Display °F";
    }
    refresh(currentLocation, currentUnit);

});

dayButton.addEventListener(("click"), (e) => {
    const currentLocation = document.querySelector(".location").textContent;
    dayHourSwitch = "day";
    refresh(currentLocation, currentUnit);
});

hourButton.addEventListener(("click"), (e) => {
    const currentLocation = document.querySelector(".location").textContent;
    dayHourSwitch = "hour";
    refresh(currentLocation, currentUnit);
});

hourRight.addEventListener(("click"), (e) => {
    const dots = document.querySelectorAll(".dot");
    const currentDot = document.querySelector(".dot-selected");
    let currentPage = currentDot.getAttribute("data-dot");
    if (currentPage < 8) currentPage++;
    dots.forEach((dot) => {
        dot.classList.remove("dot-selected");
        if (dot.getAttribute("data-dot") == currentPage) {
            dot.classList.add("dot-selected");
        }
    });
    const currentLocation = document.querySelector(".location").textContent;
    refresh(currentLocation, currentUnit);
});

hourLeft.addEventListener(("click"), (e) => {
    const dots = document.querySelectorAll(".dot");
    const currentDot = document.querySelector(".dot-selected");
    let currentPage = currentDot.getAttribute("data-dot");
    if (currentPage > 1) currentPage--;
    dots.forEach((dot) => {
        dot.classList.remove("dot-selected");
        if (dot.getAttribute("data-dot") == currentPage) {
            dot.classList.add("dot-selected");
        }
    });
    const currentLocation = document.querySelector(".location").textContent;
    refresh(currentLocation, currentUnit);
});