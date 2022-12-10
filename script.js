const key = `d076713e35f26ac6957e832ed0bbb850`;
let display = document.getElementById("display");
let submit = document.getElementById("submit");
let getCityName = null;

submit.addEventListener("click", (e) => {
  getCityName = document.getElementById("getCityName").value;
  console.log(getCityName);
  getData(getCityName);
  e.preventDefault();
  document.getElementById("form").reset();
});

async function getData(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`,
    { mode: "cors" }
  );
  const data = await response.json();
  let name = data.name.toUpperCase();
  let temp = data.main.temp;
  let feels = data.main.feels_like;
  let humidity = data.main.humidity;
  let description = data.weather[0].description.toUpperCase();
  console.log(name, temp, feels, humidity, description);
  display.innerHTML = `${name} <p>${description}<p> <p>TEMPERATURE: ${temp}°C<p> <p>FEELS LIKE: ${feels}°C<p> <p>HUMIDITY: ${humidity}%<p>`;
}
