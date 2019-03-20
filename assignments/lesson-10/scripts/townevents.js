//* Get data from BYU-I JSON and create functions to write the data

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townEvents = request.response;
    townPreston(townEvents);
    townFishHaven(townEvents);
    townSodaSprings(townEvents);
}

//* Function to write Preston data onto page; loop through JSON to find town name, then write header and events in townEventsPreston article.

function townPreston(jsonObj) {
    var towns = jsonObj['towns']
    var i = 0;
    var name = towns[i].name;

    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Preston") {
            document.getElementById("townEventsPreston").innerHTML = "<h2>Preston Events</h2> " + towns[i].events;
            }
        }
    }

//* Function to write Fish Haven data onto page; loop through JSON to find town name, then write header and events in townEventsFish article

function townFishHaven(jsonObj) {
    var towns = jsonObj['towns']
    var i = 0;
    var name = towns[i].name;

    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Fish Haven") {
            document.getElementById("townEventsFish").innerHTML = "<h2>Fish Haven Events</h2> " + towns[i].events;
        }
    }
}

//* Function to write Soda Springs data onto page; loop through JSON to find town name, then write header and events in townEventsSoda article

function townSodaSprings(jsonObj) {
    var towns = jsonObj['towns']
    var i = 0;
    var name = towns[i].name;

    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Soda Springs") {
            document.getElementById("townEventsSoda").innerHTML = "<h2>Soda Springs Events</h2> " + towns[i].events;
        }
    }
}