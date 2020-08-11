var apiKey = "5559c120a3f7be6b73acce32396df18f";

document.addEventListener('DOMContentLoaded', postForm);
document.addEventListener('DOMContentLoaded', weatherForm);

function postForm(){
    document.getElementById("postQuestionForm").addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var printInfo = {name:document.getElementById("userName").value, email:document.getElementById("userEmail").value, 
        originallyFrom:document.getElementById("userOrigin").value, why:document.getElementById("userQuestion").value};
        
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');

        console.log(JSON.stringify(printInfo));
        req.send(JSON.stringify(printInfo));
        //console.log(JSON.parse(req.resonseText));
        event.preventDefault();
    });
}

console.log("In the script JS file!"); 

function weatherForm(){
    document.getElementById("weatherBtn").addEventListener('click', function(event){
        var cityEntry = document.getElementById('cityName').value;
        var req = new XMLHttpRequest();
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityEntry + ",ar,us&appid=" + apiKey + "&units=imperial";
        req.open("GET", url, true);

        //handles the asynchronous response
        req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
                var cityInfo = JSON.parse(req.responseText);
                console.log(cityInfo)
                console.log(cityInfo.weather[0].description)
                document.getElementById("weatherSection").style.visibility = "visible";
                document.getElementById("cityWeatherName").textContent = cityInfo.name;
                document.getElementById("currentTemp").textContent = cityInfo.main.temp;
                document.getElementById("feelTemp").textContent = cityInfo.main.feels_like;
                document.getElementById("humidity").textContent = cityInfo.main.humidity;
                document.getElementById("weatherDescrip").textContent = cityInfo.weather[0].description;
            } else{
                console.log("Error in network request: " + req.statusText);
            }
        });
        req.send(null);
        event.preventDefault();
    });
}