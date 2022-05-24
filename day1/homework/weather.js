
const token="19ca35d2910ab835fa26e5643bfd08a4"



function fetchCityWeather(cityname){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${token}&units=imperial`
    
    
    
    ).then((res)=>res.json())
        .then(function(data){
            console.log(data)
            let high = data.main.temp_max
            let low = data.main.temp_min
            let humidity = data.main.humidity
            let forcast = data.weather[0].main
            document.getElementById("high").innerHTML=high
            document.getElementById("low").innerHTML=low
            document.getElementById("humidity").innerHTML=humidity
            document.getElementById("forcast").innerHTML=forcast

                      
        })
            .catch((error)=>console.log(error, "error here"))

}


let searchButton=document.getElementById("search")
searchButton.addEventListener("click", function(){
    let cityname= document.getElementById("cityname").value
    fetchCityWeather(cityname)
})