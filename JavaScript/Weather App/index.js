const form = document.getElementById("form");
const submitBtn = document.getElementById("btn");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cityName =           document.getElementById("city");
  const temp =               document.getElementById("temp");
  const humidity =           document.getElementById("humidity");
  const weatherDescription = document.getElementById("weather-description");
  const country =            document.getElementById("country");

  console.log(cityName);
  console.log(e.target.value);
  // const userInput = e.target.value;
  // getWeatherData(userInput);

})



async function getWeatherData(city) {
	const response = await fetch(displayCityWeather(city));
	const data = await response.json();

  // const cityName =           document.getElementById("city");
  // const temp =               document.getElementById("temp");
  // const humidity =           document.getElementById("humidity");
  // const weatherDescription = document.getElementById("weather-description");
  // const country =            document.getElementById("country");
  

  // console.log("temp:", data.main.temp);
  // console.log("feels_like:", data.main.feels_like);
  // console.log("humidity:", data.main.humidity);
  // console.log("city:", data.name);
  // console.log("country:", data.sys.country);
  // console.log("weather:", data.weather[0].main);
  // console.log("weather description:", data.weather[0].description);
  

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

// function render(callback){
//   const name = document.getElementById("name");
//   const temp = document.getElementById("temp");

//   getWeatherData("london");

//   ccityName.innerText = data.name;

// }
// render();


// content.innerHTML = data.main.temp_min + "&deg;" + "C"
//   content.innerHTML += data.main.humidity + "&percnt;"


function Weather () {
  
}