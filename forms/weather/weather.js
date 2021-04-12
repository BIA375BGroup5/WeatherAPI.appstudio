let apiData = []
let requestURL = "https://api.openweathermap.org/data/2.5/weather?lat=41.261066&lon=-96.132927&appid=63cd5a087f088f8fa9b2496d38d0426f&units=imperial"

function onXHRLoad() {
    let message = ""
    
    // 'this' is another name for the object returned from the API call
        apiData = JSON.parse(this.responseText)
        
// ********** MY SOLUTION - you were VERY CLOSE
        // just brings back data for one place (you gave it one lat,lon) - so 
        // don't have multiple items to loop through
        // no need for loop: for (i = 0; i <= apiData.results.length - 1; i++) { }
        // also no .results object in json data (look at Postman)
        
        // so use this: 
        txtaWeather.value = ` Weather: ${apiData.weather[0].description} \n Temperature: ${apiData.main.temp} ºF \n Wind Speed: ${apiData.wind.speed} mph`
        // console.log(` Weather: ${apiData.weather[0].description} \n Temperature in ºF: ${apiData.main.temp} \n Wind Speed in miles per hour: ${apiData.wind.speed}`)
        // ${apiData.wind}
        //message = message + apiData.results[i].name + "\n"
// **************
    
    // 2. *** put your textarea control name here ****
    // txtaWeather.value = message
    
    // if want to add to database call a function here that does that
    // addToDatabase()
}

function callAPI(URL) {
    var xhttp = new XMLHttpRequest()
    
    // if you need cors (you'll get a cors error if you don't have it and you need it)
    // use this code to add the cors code to your url 
    // xhttp.open('GET', 'https://cors.bridged.cc/' + requestURL)
    xhttp.open('GET', requestURL)

    
    /* Headers */
    // if you need to set the returned data type, use this line of code: 
    // xhttp.setRequestHeader('Content-Type', 'application/json')
    
    // if you need authorization token (stored in myToken) use this line of code: 
    // xhttp.setRequestHeader('Authorization', 'Bearer ' + myToken)
    
    // if you need a key and it's not in the url use code in one of the following
    // examples (think of headers as parameters)
    // or just use the Postman url which has all the parameters already added like I did here. 
    
    
    // Here are headers you might need: 
    
    // xhttp.setRequestHeader('lat','41.276900')
    // xhttp.setRequestHeader('long','-95.942310')
    // xhttp.setRequestHeader('appid','63cd5a087f088f8fa9b2496d38d0426f')
    

    // make the API request
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}

// 3. *** add a new button onclick event and put the callAPI code into it ***

btnWeather.onclick=function(){
  callAPI(requestURL)
}
