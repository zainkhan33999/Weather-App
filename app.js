const apiKey = "3d99585e7f41ef98dda3ae51a22100bd"
const searchBtn = document.querySelector(".search button")
const searchBox = document.querySelector(".search input")
const weather = document.querySelector(".weather")
const weatherIcon = document.querySelector(".weather-icon")
const error = document.querySelector(".error")
const apiUri = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
async function checkWeather(city){
    const response = await fetch(apiUri + city + `&appid=${apiKey}`)
    if(response.status == 404){
        error.style.display = "block"
        weather.style.display = "none"
    }
    else{
        var data = await response.json()
        console.log(data)
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" 
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
        weather.style.display= "block"
        if(data.weather[0].main=="Clouds"){
      weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else  if(data.weather[0].main=="Rain"){
            weatherIcon.src = "images/rain.png"
        }
       else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
       else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src = "images/snow.png"
        }
    } 
    }
   

searchBtn.addEventListener("click",()=>{
    
    checkWeather(searchBox.value)  
})