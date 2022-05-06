//jshint esversion:6

const express = require("express");

const app = express();

// basically our home page
app.get("/", function(request, response){
    response.send("Hello");
});

app.listen(3000, function(){
    console.log("Server started at port 3000.")
});


