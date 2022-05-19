var container = document.createElement('div');
container.className = "container";

document.body.append(container);


async function getCountries() {

    var restCountries = await fetch("https://restcountries.com/v3.1/all");

    var countryData = await restCountries.json();

    console.log(countryData);

    countryData.forEach(country => {
        var card = document.createElement('div');
        card.className = "card"
        card.className = "mt-5"
        card.style = "width: 18rem; text-align: center; border: 2px solid black"
        card.innerHTML = `
                    <h5 class="card-head">${country.name.common}</h5>
                    <img src="${country.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Capital: ${country.capital}</h5>
                        <h5 class="card-title">Region: ${country.region}</h5>
                        <h5 class="card-title">Country Code: ${country.borders}</h5>
                        <a onclick="getWeather('${country.name.common}')" class="btn btn-primary">Click for Weather</a>
                    </div>
                `
                container.appendChild(card);
    });
    

}

getCountries();

async function getWeather(countryName){
    var weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=64c97438249e2c5b3164424c4756126d`);
    var weatherData = weather.json();
    console.log(weatherData)
    weatherData.then(function(data){
        alert(`The ${countryName} temperature is : ${data.main.temp}`);
    })
    // alert(weatherData.main.temp);
}






