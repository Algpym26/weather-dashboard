// export function add(number) {
//     let sum = 0;

//     for (const n of numbers){
//         sum += n;
//     }
//     return sum;
// }
var input=document.querySelector(".inputfield")
var searchButton=document.querySelector(".submitbtn")
var cityName=document.querySelector(".cityname")
var currentTemp=document.querySelector(".temp")
var currentHum=document.querySelector(".hum")
var currentWind=document.querySelector(".wind")
var currentUvindex=document.querySelector(".uvindex")
var forescastContainer=document.querySelector(".forecast")

//element.addEventListener(event, listener, useCapture);
searchButton.addEventListener("click", function(event){
    event.preventDefault()
    getLocation(input.value)
})

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// api=81ccc9c6a08c941e92df0ad282737a69

// function myFunction(p1, p2) {
//   return p1 * p2;
// }

function getLocation(city){
    console.log(city)
var locationURL="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=81ccc9c6a08c941e92df0ad282737a69&units=imperial"

fetch(locationURL)
.then (function(respond){
    return respond.json()
})
.then (function(data){
    console.log (data)
    cityName.textContent=data.name
    currentTemp.textContent="Temp: "+data.main.temp
    currentHum.textContent="Hum: "+data.main.humidity
    currentWind.textContent="Wind: "+data.wind.speed
    currentUvindex.textContent="Description: "+data.weather[0].description
    fivedays(data.coord.lat, data.coord.lon)
})
}


//<button type="button"
//onclick="document.getElementById('demo').innerHTML = Date()">
//Click me to display Date and Time.</button>

//<p id="demo"></p>//

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
function fivedays(lat, lon){
    var forecastURL="https://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&appid=81ccc9c6a08c941e92df0ad282737a69&units=imperial"

    fetch(forecastURL)
    .then (function(respond){
        return respond.json()

    })
    .then (function(data){
        console.log (data)
        for (var i=0; i<data.list.length; i=i+8){
            console.log (data.list[i])
            var card=document.createElement("div")
            card.setAttribute("class","card")
            var temp=document.createElement("h3")
            temp.textContent= "temp:" +data.list[i].main.temp
            card.appendChild(temp)
            var hum=document.createElement("h3")
            hum.textContent= "hum:" +data.list[i].main.humidity
            card.appendChild(hum)
            var wind=document.createElement("h3")
            wind.textContent= "wind:" +data.list[i].wind.speed
            card.appendChild(wind)
            forescastContainer.appendChild(card)


        }

    })
}
let i = 0;
let len = card.length;
let text ="";
for (; i < len; ) {
    text += card[i] + "<br>";
    i++;
}