const express = require('express')
const https = require('https')

const app = express()

app.use(express.urlencoded({ extended: false }))


app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html")
    
})


app.post('/', function (req, res) {

    const query = req.body.cityName
    const apiKey = "59108cb758efbaac0417df79f1863251"
    const units = "metric"
    url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey +"&units=" + units

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const iconId = weatherData.weather[0].icon
            const iconUrl = "https://openweathermap.org/img/wn/" + iconId +"@2x.png"
            res.write("<p>The weather is currently "+ weatherDescription + "</p>" )
            res.write("<h1>The temprature is in "+ query +" is" + temp + " degree Celcius.</h1>")
            res.write("<img src ="+ iconUrl +">")
            res.send()

        })
    })
})

 

app.listen(3000, function(){
    console.log("Server has started.");
})



