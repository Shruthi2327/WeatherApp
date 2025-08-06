async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace this with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const result = document.getElementById("result");
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found!");
      const data = await response.json();
      result.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temp: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
      `;
    } catch (error) {
      result.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
  }
  