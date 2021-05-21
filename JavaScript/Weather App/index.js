const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = document.getElementById("location").value;

  getWeatherData(location);

})


async function getWeatherData(city) {
	const response = await fetch(displayCityWeather(city));
	const data = await response.json();

  const cityName =           document.getElementById("city");
  const temp =               document.getElementById("temp");
  const humidity =           document.getElementById("humidity");
  const weatherDescription = document.getElementById("weather-description");
  const country =            document.getElementById("country");
  

  cityName.innerHTML = `${data.name}, `;
  country.innerHTML = data.sys.country;
  temp.innerHTML = data.main.temp + "&deg;" + "C";
  humidity.innerHTML = `Humidity: ${data.main.humidity}&percnt;`;
  

  const capitalStr = data.weather[0].description.replace(/\b\w/g, c => c.toUpperCase());
  weatherDescription.innerHTML = capitalStr;
  
}
getWeatherData("Athens");


function displayCityWeather(location) {
  return `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=3da58929e45b1d77b5f8aaf11691b250`
}
