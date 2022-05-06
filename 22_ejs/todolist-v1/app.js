// jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

// console.log(module)
// console.log(date);
// console.log(date());

const app = express();

const items = [];
const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    let day = date.getDate();
    res.render("list", {listTitle: day, newListItems: items});
    // res.send("Hello");
});

app.post("/", function(req, res){
    console.log(req.body);
    item = req.body.newItem; // scope
    items.push(item);
    // console.log(item);
    res.redirect("/");
});

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItems: workItems})
});

app.post("/work", function(req, res){
    // console.log(req.body);
    let item = req.body.newItem;
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/about", function(req, res){
    res.render("about");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});