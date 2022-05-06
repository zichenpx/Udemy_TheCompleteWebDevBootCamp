const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
    // console.log(__dirname)
});

app.post("/", function(req, res){
    // console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;

    res.send("Thanks for posting that! The result is " + result + ".");
})

app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname + "/bmiCalculator.html");
    // console.log(__dirname)
});

app.post("/bmicalculator", function(req, res){
    // console.log(req.body);
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send("Your BMI is " + bmi + ".");
})

app.listen(3000, function(){
    console.log("Server started at port 3000.")
});