// jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
// const date = require(__dirname + "/date.js")

const app = express();

// use mongo or mongoose instead
// const items = [];
// const workItems = [];

app.set('view engine', "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Create a new database inside mongoDB
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});
// Create Item schema
const itemSchema = {
    name: String
};

const Item = mongoose.model("Item", itemSchema)

const item1 = new Item({
    name: "Welcome to your todolist!"
});

const item2 = new Item({
    name: "Hit the + button to add a new item."
})

const item3 =  new Item({
    name: "<-- Hit this to delete an item."
})

defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemSchema]
}

const List = mongoose.model("List", listSchema);

app.get("/", function(req, res){
    // let day = date.getDate();

    // read from mongoDB via mongoose
    Item.find({}, function(err, foundItems){
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully saved default items to DB.")
            }
            });
            res.redirect("/")
        } else {
            // console.log(foundItems);
            res.render("list", {listTitle: "Today", newListItems: foundItems});
        }
    });


    
});

app.post("/", function(req, res){
    // console.log(req.body);
    const itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item({
        name: itemName
    });

    if (listName === "Today"){
        item.save();
        res.redirect("/");
    } else {
        List.findOne({name: listName}, function(err, foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }



    // version 1
    // console.log(req.body);
    // item = req.body.newItem; // scope
    // items.push(item);
    // // console.log(item);
    // res.redirect("/");
});

app.post("/delete", function(req, res){
    // console.log(req.body);
    const checkedItemId = req.body.checkbox;
    // delete custom list's item
    const listName = req.body.listName;

    if (listName === "Today") {
        Item.findByIdAndRemove(checkedItemId, function(err){
            if(!err){
                console.log("Successfully deleted checked item.");
                res.redirect("/");
            }
        });
    } else {
        List.findOneAndUpdate(
            {name: listName}, 
            {$pull: {items:{_id: checkedItemId}}}, 
            function(err, foundList){
                if(!err){
                    res.redirect("/" + listName);
                }
            });
    }

    
});

// Create custom lists(routes)
app.get("/:customListName", function(req, res){
    // console.log(req.params.customListName)
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({name: customListName}, function(err, foundList){
        if(!err){
            if (!foundList){
                // console.log("Doesn't exit!")
                // Create a new list
                    const list = new List ({
                        name: customListName,
                        items: defaultItems
                    })

                    list.save();
                    res.redirect("/");
            } else {
                // console.log("Exists!")
                // Show an existing list

                res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
            }
        }
    });
});

// version 1
// app.get("/work", function(req, res){
//     res.render("list", {listTitle:"Work List", newListItems: workItems});
// });

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