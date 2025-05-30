const API_KEY = "6ffce58c8a92b2dc43d1f7afcb42738d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const userLocation = document.querySelector("#weather span:last-child");
        userLocation.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

