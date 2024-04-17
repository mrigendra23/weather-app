const apiKey ="11f5605d52b1c70f35c5d7562e803ff1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".searchBar input");
const searchbtn =document.querySelector(".searchBar button");
const weatherIcon =document.querySelector(".weather-icon");
async function checkWeather (city){
    const response = await fetch( apiUrl + city +`&appid=${apiKey}`);

if(response.status == 404){
    document.querySelector(".error").style.display ="block"
    document.querySelector(".weather").style.display ="none"
}

else {
    var data = await response.json();
    
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main =="clouds"){
        weatherIcon.src = "images - Copy\clouds.png"
    }
    else if(data.weather[0].main =="clear"){
        weatherIcon.src = "images - Copy/clear.png"
    }

    else if(data.weather[0].main =="drizzle"){
        weatherIcon.src = "images - Copy/drizzle.png"

}
else if(data.weather[0].main =="humidity"){
    weatherIcon.src = "images - Copy/humidity.png"

}
else if(data.weather[0].main =="rain"){
    weatherIcon.src = "images - Copy/rain.png"
}

else if(data.weather[0].main =="mist"){
    weatherIcon.src = "images - Copy/mist.png"


}

else if(data.weather[0].main =="snow"){
    weatherIcon.src = "images - Copy/snow.png"

}

document.querySelector(".weather").style.display= "block";
document.querySelector(".error").style.display ="none"



}
}


    
searchbtn.addEventListener('click',()=> {
    checkWeather(searchBox.value)
})

