let forecastRequest = new XMLHttpRequest();
let forecastApiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=0b25c1f6d23d52987a6d10f8c21a31e6';
forecastRequest.open('Get', forecastApiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function () {
  let forecastData = JSON.parse(forecastRequest.responseText);
  console.log(forecastData);

  var imageWeather = "http://openweathermap.org/img/w/";
  var forecastArray = forecastData.list;
  var dayOne, dayTwo, dayThree, dayFour, dayFive;
  var z = 0;

  for (var i = 0; i < forecastArray.length; i++) {
    var x = forecastData.list[i].dt_txt;
    var y = x.includes('18:00:00');
    if (y == true) {
      switch (z) {
        case 0:
          dayOne = forecastData.list[i];
          break;
        case 1:
          dayTwo = forecastData.list[i];
          break;
        case 2:
          dayThree = forecastData.list[i];
          break;
        case 3:
          dayFour = forecastData.list[i];
          break;
        case 4:
          dayFive = forecastData.list[i];
          break;
        default:
          break;
      }
      z++;
    }
  }

  var dayOneDate = new Date(dayOne.dt_txt);
  var dayOneDay = dayOneDate.getDay();
  var dayTwoDate = new Date(dayTwo.dt_txt);
  var dayTwoDay = dayTwoDate.getDay();
  var dayThreeDate = new Date(dayThree.dt_txt);
  var dayThreeDay = dayThreeDate.getDay();
  var dayFourDate = new Date(dayFour.dt_txt);
  var dayFourDay = dayFourDate.getDay();
  var dayFiveDate = new Date(dayFive.dt_txt);
  var dayFiveDay = dayFiveDate.getDay();

  switch (dayOneDay) {
    case 0:
      fiveDayOne = "Sunday";
      break;
    case 1:
       fiveDayOne = "Monday";
      break;
    case 2:
       fiveDayOne = "Tuesday";
      break;
    case 3:
      fiveDayOne = "Wednesday";
      break;
    case 4:
       fiveDayOne = "Thursday";
      break;
      case 5:
      fiveDayOne = "Friday";
     break;
     case 6:
     fiveDayOne = "Saturday";
    break;
    default:
      break;
  }

  switch (dayTwoDay) {
    case 0:
      fiveDayTwo = "Sunday";
      break;
    case 1:
       fiveDayTwo = "Monday";
      break;
    case 2:
       fiveDayTwo = "Tuesday";
      break;
    case 3:
      fiveDayTwo = "Wednesday";
      break;
    case 4:
       fiveDayTwo = "Thursday";
      break;
      case 5:
      fiveDayTwo = "Friday";
     break;
     case 6:
     fiveDayTwo = "Saturday";
    break;
    default:
      break;
  }

  
  switch (dayThreeDay) {
    case 0:
      fiveDayThree = "Sunday";
      break;
    case 1:
       fiveDayThree = "Monday";
      break;
    case 2:
       fiveDayThree = "Tuesday";
      break;
    case 3:
      fiveDayThree = "Wednesday";
      break;
    case 4:
       fiveDayThree = "Thursday";
      break;
      case 5:
      fiveDayThree = "Friday";
     break;
     case 6:
     fiveDayThree = "Saturday";
    break;
    default:
      break;
  }

  switch (dayFourDay) {
    case 0:
      fiveDayFour = "Sunday";
      break;
    case 1:
       fiveDayFour = "Monday";
      break;
    case 2:
       fiveDayFour = "Tuesday";
      break;
    case 3:
      fiveDayFour = "Wednesday";
      break;
    case 4:
       fiveDayFour = "Thursday";
      break;
      case 5:
      fiveDayFour = "Friday";
     break;
     case 6:
     fiveDayFour = "Saturday";
    break;
    default:
      break;
  }

  switch (dayFiveDay) {
    case 0:
      fiveDayFive = "Sunday";
      break;
    case 1:
       fiveDayFive = "Monday";
      break;
    case 2:
       fiveDayFive = "Tuesday";
      break;
    case 3:
      fiveDayFive = "Wednesday";
      break;
    case 4:
       fiveDayFive = "Thursday";
      break;
      case 5:
      fiveDayFive = "Friday";
     break;
     case 6:
     fiveDayFive = "Saturday";
    break;
    default:
      break;
  }



document.getElementById("day-1").innerHTML = fiveDayOne;
document.getElementById("day-2").innerHTML = fiveDayTwo;
document.getElementById("day-3").innerHTML = fiveDayThree;
document.getElementById("day-4").innerHTML = fiveDayFour;
document.getElementById("day-5").innerHTML = fiveDayFive;

document.getElementById("high-1").innerHTML = dayOne.main.temp_max + "&deg;";
document.getElementById("high-2").innerHTML = dayTwo.main.temp_max + "&deg;";
document.getElementById("high-3").innerHTML = dayThree.main.temp_max + "&deg;";
document.getElementById("high-4").innerHTML = dayFour.main.temp_max + "&deg;";
document.getElementById("high-5").innerHTML = dayFive.main.temp_max + "&deg;";

document.getElementById("img-1").setAttribute("src", imageWeather + dayOne.weather[0].icon + ".png");
document.getElementById("img-2").setAttribute("src", imageWeather + dayTwo.weather[0].icon + ".png");
document.getElementById("img-3").setAttribute("src", imageWeather + dayThree.weather[0].icon + ".png");
document.getElementById("img-4").setAttribute("src", imageWeather + dayFour.weather[0].icon + ".png");
document.getElementById("img-5").setAttribute("src", imageWeather + dayFive.weather[0].icon + ".png");

document.getElementById("img-1").setAttribute("alt", dayOne.weather[0].description);
document.getElementById("img-2").setAttribute("alt", dayOne.weather[0].description);
document.getElementById("img-3").setAttribute("alt", dayOne.weather[0].description);
document.getElementById("img-4").setAttribute("alt", dayOne.weather[0].description);
document.getElementById("img-5").setAttribute("alt", dayOne.weather[0].description);

document.getElementById("condition-1").innerHTML = dayOne.weather[0].main;
document.getElementById("condition-2").innerHTML = dayTwo.weather[0].main;
document.getElementById("condition-3").innerHTML = dayThree.weather[0].main;
document.getElementById("condition-4").innerHTML = dayFour.weather[0].main;
document.getElementById("condition-5").innerHTML = dayFive.weather[0].main;

document.getElementById("low-1").innerHTML = dayOne.main.temp_min + "&deg;";
document.getElementById("low-2").innerHTML = dayTwo.main.temp_min + "&deg;";
document.getElementById("low-3").innerHTML = dayThree.main.temp_min + "&deg;";
document.getElementById("low-4").innerHTML = dayFour.main.temp_min + "&deg;";
document.getElementById("low-5").innerHTML = dayFive.main.temp_min + "&deg;";
}