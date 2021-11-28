var express = require("express");


var app = express();

app.use(express.static(__dirname + "/static"));


app.set("views", __dirname + "/Views");

app.set("view engine", "ejs");

app.get("/cats", function(request, response){

    response.render("cats");
})

app.get("/nibbles", function(reuqest, response){

    var details = {
        name : "Nibbles",
        favFood : "Tuna",
        age : "2",
        pic : "cat1.jpg",
        spots : ["Under the bed", "in a sunbeam", "in the kitchen"]
    }
    response.render("details", {kitty: details});
})

app.get("/cuddles", function(reuqest, response){

    var details = {
        name : "Cuddles",
        favFood : "Spaghetti",
        age : "5",
        pic : "cat2.jpg",
        spots : ["Under the bed", "in a sunbeam", "in the garden"]

    }
    response.render("details", {kitty: details});
})

app.get("/chester", function(reuqest, response){

    var details = {
        name : "Chester",
        favFood : "Rats",
        age : "4",
        pic : "cat3.jpg",
        spots : ["Under the sofa", "hunting", "drinking milk"]
    }

    response.render("details", {kitty: details});
})

app.listen(8000, function(){
  
    console.log("Listening on port 8000");
})