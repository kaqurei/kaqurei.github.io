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