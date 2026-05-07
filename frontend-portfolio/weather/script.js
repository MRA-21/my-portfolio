const apiKey = "092479ba03d56bfee127b84b279678d6"; // replace with your actual key

document.getElementById('get-weather').addEventListener('click', () => {
  const city = document.getElementById('city-input').value.trim();
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const output = document.getElementById('weather-output');
      output.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>${data.weather[0].description} 🌤️</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
      `;
    })
    .catch(err => {
      const output = document.getElementById('weather-output');
      output.innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
});