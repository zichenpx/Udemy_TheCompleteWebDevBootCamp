//jshint esversion:6
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it working
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
// const bcrypt = require("bcrypt")
// const saltRounds = 10;
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

// Now the important thing that you need to remember with hashing is that when you run the Hash function
// on the same string, the hash that's created is always going to be the same.
// console.log(md5(123456));

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Setup Sessions, before mongoose.connect.
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false
}));

// Initialize session
app.use(passport.initialize());
// use passport to deal with session
app.use(passport.session());

/* mongoose db setup */
mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});
// DeprecationWarning: collection.ensureIndex is deprecated. 
// Use createIndexes instead.
mongoose.set("useCreateIndex", true);

// No longer a javascript object, but a object created by mongoose schema class
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*  */
app.get("/", function(req, res){
    res.render("home");
})

app.get("/login", function(req, res){
    res.render("login");
})

app.post("/login", function(req, res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    // Use passport to login the user and authenticate them
    req.login(user, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully login.")
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
          }
    });

});

app.get("/register", function(req, res){
    res.render("register");
});

app.get("secrete", function(req, res){
    if (req.isAuthenticated()) {
        res.render("secrete");
    } else {
        res.redirect("/login");
    }
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

app.post("register", function(req, res){
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if (err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });
    
});



















app.listen(3000, function(){
    console.log("Sever started on port 3000.")
});