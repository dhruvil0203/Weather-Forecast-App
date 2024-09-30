const apikey = "7152c35def31e7bbd1f5a7f12512214d";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temprature").innerText =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerText =
      data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " Km/h";

    const weatherCondition = data.weather[0].main.toLowerCase();

    if (weatherCondition === "clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherCondition === "clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weatherCondition === "rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weatherCondition === "drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition === "snow") {
      weatherIcon.src = "images/snow.png";
    } else if (weatherCondition === "mist") {
      weatherIcon.src = "images/mist.png";
    } else {
      weatherIcon.src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});