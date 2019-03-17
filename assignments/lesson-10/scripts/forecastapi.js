let forecastRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {
let forecastData = JSON.parse(forecastRequest.responseText);
console.log(forecastData);


}