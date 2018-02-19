Campground.create({
	name: "Manhattan",
	image: "https://cdn.liquor.com/wp-content/uploads/2012/09/04121600/bourbon-manhattan.jpg",
	description: "2 oz Bourbon Whiskey, 0.5 oz Sweet Vermouth, 1 dash Angostura, Stir, Garnish: Cherry"
}, function(err, newlyCreated){
	if(err)
		console.log(err);
	else{
		console.log("Newly Created Item: ");
		console.log(newlyCreated);
	}
});

Campground.create({
	name: "Cosmopolitan",
	image: "http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/12/28/21623/Cosmopolitan-cocktail_F.jpg?width=1229&height=768&mode=crop&quality=75",
	description: "1.5 oz Cirtus Vodka, 0.5 oz Cointreau, 0.5 oz Lime Juice, 1 oz Cranberry Juice, Shake, Garnish: Lime"
}, function(err, newlyCreated){
	if(err)
		console.log(err);
	else{
		console.log("Newly Created Item: ");
		console.log(newlyCreated);
	}
});

Campground.create({
	name: "Mojito",
	image: "https://cdn.liquor.com/wp-content/uploads/2017/03/07152909/mojito-720x720-recipe.jpg",
	description: ""
}, function(err, newlyCreated){
	if(err)
		console.log(err);
	else{
		console.log("Newly Created Item: ");
		console.log(newlyCreated);
	}
});

