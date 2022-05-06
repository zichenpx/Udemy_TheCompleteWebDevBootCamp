//jshint esversion:6
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it working
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
const bcrypt = require("bcrypt")
const saltRounds = 10;

const app = express();

// Now the important thing that you need to remember with hashing is that when you run the Hash function
// on the same string, the hash that's created is always going to be the same.
// console.log(md5(123456));

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

/* mongoose db setup */
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});

// No longer a javascript object, but a object created by mongoose schema class
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});


const User = new mongoose.model("User", userSchema);

/*  */
app.get("/", function(req, res){
    res.render("home");
})

app.get("/login", function(req, res){
    res.render("login");
})

app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username}, function(err, foundUser){
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function(error, result) {
                    // result == true
                    if (result === true) {
                        res.render("secrets");
                    }
                });
            }
        }
    });
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("register", function(req, res){
    
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
        const newUser = new User ({
            email: req.body.username,
            password: hash
    });
        newUser.save(function(err){
            if (err) {
                console.log(err)
            } else {
                res.render("secrets");
            }
        });
    });
});



















app.listen(3000, function(){
    console.log("Sever started on port 3000.")
});