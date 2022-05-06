const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    
    res.sendFile(__dirname + "/index.html")
    // res.send("Server is up and running.") //Can only has one res.send()
})

app.post("/", function(req, res){
    // console.log("Post request revieved.")
    // console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "b6804624069d930200d962663e3e3958";
    const unit = "metric";
    // const url = "https://api.openweathermap.org/data/2.5/weather?lat=25&lon=121.29&appid=b6804624&069d930200d962663e3e3958";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&appid=" + apiKey + "&units=" + unit;
    https.get(url, function(response){
        console.log(response.stateCode);

        response.on("data", function(data){
            // console.log(data);
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<p>The weather is currently " + weatherDescription + "</p>")
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
            res.write("<img src = " + imageURL + ">");
            res.send();

        });
    });
    // res.send("Server is up and running.") //Can only has one res.send()
})







app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})