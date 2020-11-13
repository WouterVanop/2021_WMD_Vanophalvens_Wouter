(function () {
    'use strict'
    const api = {
        key: "b462ae11253244b2d646dc4767fc7f79",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    getResults("Ghent");

    document.getElementById('dag1kleurveranderen').style.backgroundColor = 'red';
    function getResults(query) {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(weather => {
                return weather.json();
            }).then(displayResults);
    }

    function displayResults(weather) {

        //city and country
        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name="Gent"}, ${weather.sys.country}`;

        //date
        let now = new Date();

        let date1 = document.querySelector('.location .date1');
        date1.innerText = dateBuilder(now, 0);
        let date2 = document.querySelector('.location .date2');
        date2.innerText = dateBuilder(now, 1);
        let date3 = document.querySelector('.location .date3');
        date3.innerText = dateBuilder(now, 2);
        let date4 = document.querySelector('.location .date4');
        date4.innerText = dateBuilder(now, 3);
        let date5 = document.querySelector('.location .date5');
        date5.innerText = dateBuilder(now, 4);

        //temp
        let temp1 = document.querySelector('.current1 .temp1');
        temp1.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
        let temp2 = document.querySelector('.current2 .temp2');
        temp2.innerHTML = `${Math.round(weather.main.temp - 1)}<span>°C</span>`;
        let temp3 = document.querySelector('.current3 .temp3');
        temp3.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
        let temp4 = document.querySelector('.current4 .temp4');
        temp4.innerHTML = `${Math.round(weather.main.temp + 3)}<span>°C</span>`;
        let temp5 = document.querySelector('.current5 .temp5');
        temp5.innerHTML = `${Math.round(weather.main.temp + 10)}<span>°C</span>`;

        //current weather
        let weather_el1 = document.querySelector('.current1 .weather1');
        weather_el1.innerText = weather.weather[0].main;
        if (weather.weather[0].main == 'Sunny') {
            document.getElementById('dag1kleurveranderen').style.backgroundColor = 'red';
        } else if (weather.weather[0].main == 'Clouds'){
            document.getElementById('dag1kleurveranderen').style.backgroundColor = 'blue';
        } else if(weather.weather[0].main == 'Clear'){
            document.getElementById('dag1kleurveranderen').style.backgroundColor = 'orange';
        }
        let weather_el2 = document.querySelector('.current2 .weather2');
        weather_el2.innerText = "Clouds";
        document.getElementById('dag2kleurveranderen').style.backgroundColor = 'blue';
        let weather_el3 = document.querySelector('.current3 .weather3');
        weather_el3.innerText = "Clouds";
        document.getElementById('dag3kleurveranderen').style.backgroundColor = 'blue';
        let weather_el4 = document.querySelector('.current4 .weather4');
        weather_el4.innerText = "Clear";
        document.getElementById('dag4kleurveranderen').style.backgroundColor = 'orange';
        let weather_el5 = document.querySelector('.current5 .weather5');
        weather_el5.innerText = "Sunny";
        document.getElementById('dag5kleurveranderen').style.backgroundColor = 'red';

        //hi-low
        let hilow1 = document.querySelector('.hi-low1');
        hilow1.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
        let hilow2 = document.querySelector('.hi-low2');
        hilow2.innerText = `${Math.round(weather.main.temp_min - 2)}°c / ${Math.round(weather.main.temp_max - 2)}°c`;
        let hilow3 = document.querySelector('.hi-low3');
        hilow3.innerText = `${Math.round(weather.main.temp_min - 1)}°c / ${Math.round(weather.main.temp_max - 2)}°c`;
        let hilow4 = document.querySelector('.hi-low4');
        hilow4.innerText = `${Math.round(weather.main.temp_min + 2)}°c / ${Math.round(weather.main.temp_max + 2)}°c`;
        let hilow5 = document.querySelector('.hi-low5');
        hilow5.innerText = `${Math.round(weather.main.temp_min + 5)}°c / ${Math.round(weather.main.temp_max + 8)}°c`;
    }

    function dateBuilder(d, number) {
        let months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
        let days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

        let day = days[d.getDay() + number];
        let date = d.getDate() + number;
        if (days.length <= d.getDay() + number) {
            day = days[(d.getDay() + number) - days.length];
        } else {
            day = days[d.getDay() + number];
        }
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }
})();

// API werkt alleen voor vandaag => tijd over: API zoeken voor meerdere dagen