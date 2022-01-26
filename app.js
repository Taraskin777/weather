let city = prompt("Введіть назву міста");
console.log(city)

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=6225f66df5569a589eb419013487767e`)
   
   // console.log(city)
   .then((res) => res.json())
   .then((data) => {
      console.log(data);
      document.querySelector('.city').textContent = 'City: ' + data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg' + ' C';
      document.querySelector('.humidity').textContent = 'Humidity: ' + data.main.humidity + ' %';
      document.querySelector('.pressure').textContent = 'Pressure: ' + data.main.pressure + ' hPa';
      document.querySelector('.wind').textContent ='Wind speed: ' + data.wind.speed + ' km/h';
      document.querySelector('.deg').innerHTML ='Wind deg: ' + data.wind.deg + '&deg';
      document.querySelector('.icon').innerHTML = '<img src="https://openweathermap.org/img/w/'+ data.weather[0].icon +'.png">';
      document.querySelector('.description').textContent = data.weather[0].description;
      
   })