//jshint esversion:6
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it working
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

// console.log(process.env.API_KEY);

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

/* Add any other plugins or middleware here. For example, middleware for hashing passwords */
// var encKey = process.env.SOME_32BYTE_BASE64_STRING;
// var sigKey = process.env.SOME_64BYTE_BASE64_STRING;

/* Secret String Instead of Two Keys
For convenience, you can also pass in a single secret string instead of two keys. */
// var secret = process.env.SOME_LONG_UNGUESSABLE_STRING;
// userSchema.plugin(encrypt, { secret: secret });
const secret = process.env.SECRET;
userSchema.plugin(encrypt, { secret: secret , encryptedFields: ["password"]} );
// It is important to add this plugin to the schema before you create your 
// mongoose model(const User = new mongoose.model("User", userSchema);)
// You can see that we're passing in the userSchema as a parameter to create our new mongoose model -> namely, user model.
// Also, this ad  to entire database.

// userSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey });
// This adds _ct and _ac fields to the schema, as well as pre 'init' and pre 'save' middleware,
// and encrypt, decrypt, sign, and authenticate instance methods

// encrypt age regardless of any other options. name and _id will be left unencrypted
// userSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey, encryptedFields: ['age'] });

const User = new mongoose.model("User", userSchema);
User = mongoose.model('User', userSchema);

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
                if (foundUser.password === password) {
                    res.render("secrets");
                }
            }
        }
    });
});

app.get("/register", function(req, res){
    res.render("register");
})

app.post("register", function(req, res){
    const newUser = new User ({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err){
        if (err) {
            console.log(err)
        } else {
            res.render("secrets");
        }
    });
})



















app.listen(3000, function(){
    console.log("Sever started on port 3000.")
});