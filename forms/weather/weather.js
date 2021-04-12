let apiData = []
let requestURL = "https://api.openweathermap.org/data/2.5/weather?lat=41.261066&lon=-96.132927&appid=63cd5a087f088f8fa9b2496d38d0426f&units=imperial"

function onXHRLoad() {
    let message = ""
    
    // 'this' is another name for the object returned from the API call
        apiData = JSON.parse(this.responseText)


        txtaWeather.value = ` Weather: ${apiData.weather[0].description} \n Temperature: ${apiData.main.temp} ºF \n Wind Speed: ${apiData.wind.speed} mph`
        
// **************

function callAPI(URL) {
    var xhttp = new XMLHttpRequest()
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    xhttp.open('GET', requestURL)


    

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

// 3. *** add a new button onclick event and put the callAPI code into it ***

btnWeather.onclick=function(){
  callAPI(requestURL)
}
