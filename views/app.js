
const form = document.querySelector("#form");
const input = document.querySelector("#text-input");

const date = document.querySelector("#date");
date.textContent = "date";
const temp = document.querySelector("#temp");
temp.innerHTML = "-"+"&deg;C";
const humidity = document.querySelector("#humidity");
humidity.textContent = "-"
const pressure = document.querySelector("#pressure");
pressure.textContent = "-"
const city = document.querySelector("#city");
const description = document.querySelector("#description");
description.innerHTML="description"
city.textContent="city";


form.addEventListener("click", (e)=> {
    e.preventDefault();
    const Inputcity = input.value;
    var WeatherAPI= `/getWeather/?city=${Inputcity}`;

    fetch(WeatherAPI)
    .then(res => res.json())
    .then(data => {
            if(data.error) {
                console.log("error :(");
            }
            else {
                date.textContent = Date().substring(0, 15);
                city.textContent = data.city;
                temp.innerHTML = Math.round(data.temp) + "&deg;C";
                description.textContent = data.description;
                humidity.textContent = data.humidity;
                pressure.textContent = data.pressure;
            }
        })
    .catch((err)=> {
        console.log(err)
    })

});