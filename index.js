const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "02578948edb794326e4528b316ef52ef",
};

function getWeather() {
  const cityId = document.querySelector("#city").value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then((weather) => {
      return weather.json();
    })
    .then(function (data) {
      document.querySelector(".card-title").textContent = data.name;

      document.querySelector(".temperature").innerHTML =
        Math.round(data.main.temp) + "&deg;";

      document.querySelector(".feelslike").textContent =
        "Feels like: " + Math.round(data.main["feels_like"]) + "°";

      document.querySelector(".clouds").textContent =
        data.weather[0]["description"];

      document.querySelector(
        ".features"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;

      document.querySelector(
        ".humidity"
      ).textContent = `Humidity: ${data.main["humidity"]}%`;

      document.querySelector(
        ".pressure"
      ).textContent = `Pressure: ${data.main["pressure"]}hPa`;

      document.querySelector(
        ".wind"
      ).textContent = `Wind velocity: ${data.wind["speed"]}m/s`;
    })
    .then(showWeather);
}

function showWeather(data) {
  console.log(data);
}

getWeather();
document.querySelector("#city").onchange = getWeather;
