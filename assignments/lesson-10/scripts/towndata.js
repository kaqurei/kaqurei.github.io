var preston = document.querySelector('.item2');
var sodasprings = document.querySelector('.item3');
var fishhaven = document.querySelector('.item4');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    townPreston(townData);
    townFishHaven(townData);
    townSodaSprings(townData);
}

function townPreston(jsonObj) {
    var towns = jsonObj['towns']
    var i = 0;
    var name = towns[i].name;

    for (i = 0; i < towns.length; i++) {
        var name = towns[i].name;
        if (name == "Preston") {
            var townName = document.createElement('h2');
            townName.textContent = towns[i].name;
            preston.appendChild(townName);

            var townMotto = document.createElement('h3');
            townMotto.textContent = '"' + towns[i].motto + '"';
            preston.appendChild(townMotto);

            var townFound = document.createElement('p');
            townFound.textContent = 'Founded: ' + towns[i].yearFounded;
            preston.appendChild(townFound);

            var townPop = document.createElement('p');
            townPop.textContent = 'Population: ' + towns[i].currentPopulation;
            preston.appendChild(townPop);

            var townRain = document.createElement('p');
            townRain.textContent = 'Average Precipitation: ' + towns[i].averageRainfall + '"';
            preston.appendChild(townRain);

            document.getElementById("townEvents").innerHTML = towns[i].events;
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
            var townName = document.createElement('h2');
            townName.textContent = towns[i].name;
            sodasprings.appendChild(townName);

            var townMotto = document.createElement('h3');
            townMotto.textContent = '"' + towns[i].motto + '"';
            sodasprings.appendChild(townMotto);

            var townFound = document.createElement('p');
            townFound.textContent = 'Founded: ' + towns[i].yearFounded;
            sodasprings.appendChild(townFound);

            var townPop = document.createElement('p');
            townPop.textContent = 'Population: ' + towns[i].currentPopulation;
            sodasprings.appendChild(townPop);

            var townRain = document.createElement('p');
            townRain.textContent = 'Average Precipitation: ' + towns[i].averageRainfall + '"';
            sodasprings.appendChild(townRain);
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
            var townName = document.createElement('h2');
            townName.textContent = towns[i].name;
            fishhaven.appendChild(townName);

            var townMotto = document.createElement('h3');
            townMotto.textContent = '"' + towns[i].motto + '"';
            fishhaven.appendChild(townMotto);

            var townFound = document.createElement('p');
            townFound.textContent = 'Founded: ' + towns[i].yearFounded;
            fishhaven.appendChild(townFound);

            var townPop = document.createElement('p');
            townPop.textContent = 'Population: ' + towns[i].currentPopulation;
            fishhaven.appendChild(townPop);

            var townRain = document.createElement('p');
            townRain.textContent = 'Average Precipitation: ' + towns[i].averageRainfall + '"';
            fishhaven.appendChild(townRain);
        }
    }
}