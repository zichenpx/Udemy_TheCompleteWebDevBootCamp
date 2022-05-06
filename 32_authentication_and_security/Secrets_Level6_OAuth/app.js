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
// https://www.passportjs.org/
// https://www.passportjs.org/packages/passport-google-oauth20/
// https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

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
    password: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

// https://www.passportjs.org/tutorials/password/session/
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    // console.log(profile);

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

/*  */
app.get("/", function(req, res){
    res.render("home");
})

app.get("/auth/google", function(req, res){
    passport.authenticate("google", { scope: ["profile"] });
})

app.get("/auth/google/secrets", 
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect secret page.
    res.redirect('/');
  });

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

app.get("/secrete", function(req, res){
    User.find({"secret": {$ne: null}}, function(err, foundUsers){
        if(err) {
            console.log(err)
        } else {
            if(foundUsers) {
                res.render("secrets", {usersWithSecrets: foundUsers})
            }
        }
    });
});

app.get("/submit", function(req, res){
    if (req.isAuthenticated()) {
        res.render("submit");
    } else {
        res.redirect("/login");
    } 
})

app.post("/submit", function(req, res){
    const submittedSecret = req.body.secret;

    // console.log(user);
    User.findById(req.user.id, function(err, foundUser){
        if (err) {(
            console.log(err);
        } else {
            if (foundUser) {
                foundUser.secret = submittedSecret;
                foundUser.save(function(){
                    res.redirect("/secrets");
                });
            }   
        }
    });
})

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