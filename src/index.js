function getWeatherinfo(response) {
    console.log(response.data);
    const temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${Math.round(
      response.data.temperature.current
    )} C`;
    const conditionElement = document.querySelector("#weather-condition");
    conditionElement.innerHTML = response.data.condition.description;
    const humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    const speedElement = document.querySelector("#wind");
    speedElement.innerHTML = `${response.data.wind.speed}km/h`;
    const timeElement = document.querySelector("#time");
  
    const date = new Date(response.data.time * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const days = [
      "Sunday",
      "Monday",
      "Tuseday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[date.getDay()];
    timeElement.innerHTML = `${day} ${hours}: ${minutes}`;
    console.log(day);
    console.log(hours);
    console.log(minutes);
  }
  
  function searchCity(city) {
    const apiKey = "02ccbb242b049d619a5146ftbb339do7";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
  
    axios.get(apiUrl).then(getWeatherinfo);
  }
  
  function submitForm(event) {
    event.preventDefault();
    let inputElement = document.querySelector("#input");
    inputElement = input.value;
    const headerElement = document.querySelector("#h1");
    headerElement.innerHTML = inputElement;
    searchCity(inputElement);
  }
  
  const formElement = document.querySelector("#form");
  formElement.addEventListener("submit", submitForm);
  