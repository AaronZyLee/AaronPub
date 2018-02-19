var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Manhattan",
        image: "https://cdn.liquor.com/wp-content/uploads/2012/09/04121600/bourbon-manhattan.jpg",
        description: "2 oz Bourbon Whiskey, 0.5 oz Sweet Vermouth, 1 dash Angostura, Stir, Garnish: Cherry"
    },
    {
        name: "Cosmopolitan",
        image: "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/12/28/21623/Cosmopolitan-cocktail_F.jpg?width=1229&height=768&mode=crop&quality=75",
        description: "1.5 oz Cirtus Vodka, 0.5 oz Cointreau, 0.5 oz Lime Juice, 1 oz Cranberry Juice, Shake, Garnish: Lime"
    },
    {
        name: "Mojito",
        image: "https://cdn.liquor.com/wp-content/uploads/2017/03/07152909/mojito-720x720-recipe.jpg",
        description: "2oz rum, 1oz lime, 0.5~1oz sugar, Mint, top soda(45ml), stir, Ganish: Mint"
    }
]


function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log("removed campgrounds!");
    //     Comment.remove({}, function(err) {
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log("removed comments!");
    //          //add a few campgrounds
    //         data.forEach(function(seed){
    //             Campground.create(seed, function(err, campground){
    //                 if(err){
    //                     console.log(err)
    //                 } else {
    //                     console.log("added a campground");
    //                     //create a comment
    //                     Comment.create(
    //                         {
    //                             text: "This place is great, but I wish there was internet",
    //                             author: "Homer"
    //                         }, function(err, comment){
    //                             if(err){
    //                                 console.log(err);
    //                             } else {
    //                                 campground.comments.push(comment._id);
    //                                 campground.save();
    //                                 console.log("Created new comment");
    //                             }
    //                         });
    //                 }
    //             });
    //         });
    //     });
     }); 
    //add a few comments
}

module.exports = seedDB;