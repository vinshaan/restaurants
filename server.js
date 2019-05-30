var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));

// Session
var session = require('express-session');

// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

const flash = require('express-flash');
app.use(flash());

var ReviewSchema = new mongoose.Schema({
    customer_name: {type: String},
    stars: {type: Number},
    description: {type: String}
})

var RestaurantSchema = new mongoose.Schema({
    name: {type: String},
    cuisine: {type: String},
    reviews: [ReviewSchema]
})


const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
const Review = mongoose.model('Review', ReviewSchema);

app.get('/get_restaurants', function(req, res){
    Restaurant.find({}, null, {sort: {name: 1}}, function(err, restaurants){
        if(err){
            console.log("There was an error", err);
        }
        else {
            res.json({restaurants});
        }
    })
})

app.get('/get_restaurant_by_id/:id', function(req, res){
    var restaurant_id = req.params.id;
    Restaurant.findById({_id: restaurant_id}, null, {sort: {reviews:1}}, function(err, restaurants){
        if(err){
            console.log("There was an error", err);
        }
        else {
            res.json({restaurants});
            console.log("look here", restaurants)
        }
    })
})

app.post('/add_review/:id', function(req, res){
    var restaurant_id = req.params.id;
    var new_review = new Review(req.body);
    new_review.save(function(err, reviews){
        if(err){
            res.json({message:"Error"});
        }
        else {
            console.log("Successfully added");
            Restaurant.update({_id: restaurant_id}, {$push: {reviews: [reviews]}}, function(err, restaurants){
                if(err){
                    console.log('error');
                }
                else{
                    res.json({restaurants});
                }
            })
        }
    })
})


app.post('/add_restaurant', function(req, res){
    var new_restaurant = new Restaurant(req.body);
    console.log(req.body);
    new_restaurant.save(function(err, restaurants){
        if(err){
            res.json({message:"Error"});
        }
        else {
            console.log("Successfully added!")
            res.json({restaurants});
            console.log(restaurants);
    
        }
    })
})



app.put('/edit_restaurant/:id', function(req, res){
    var restaurant_id = req.params.id;
    console.log(restaurant_id);
    console.log(req.body);
    Restaurant.findByIdAndUpdate({_id: restaurant_id}, {name: req.body.name, cuisine: req.body.cuisine}, function(err, restaurants){
        if(err){
            res.json({message:"Error"});
        }
        else {
            console.log("Successfully edited");
            res.json({restaurants});
        }
    })
})


app.delete('/delete_restaurant/:id', function(req, res){
    var restaurant_id = req.params.id;
    Restaurant.findByIdAndDelete({_id: restaurant_id}, function(err, restaurants){
        if(err){
            res.json({message: "Error"})
        }
        else {
            console.log("Successfully Deleted");
            res.json({restaurants});
        }
    })
})

app.get('/get_restaurant_by_name/:name', function(req, res){
    var restaurant_name = req.params.name;
    Restaurant.findOne({name: restaurant_name}, function(err, restaurants){
        if(err){
            console.log("There was an error", err);
        }
        else {
            res.json({restaurants});
            console.log("look here", restaurants)
        }
    })
})


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

app.listen(8000, function() {
    console.log("listening on port 8000");
})