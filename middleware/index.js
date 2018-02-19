var middlewareObj = {};
var Campground = require("../models/campground");
var Comment = require("../models/comment");

middlewareObj.checkCampgroundOwnership = function(req,res,next){
	if(req.isAuthenticated()){
		//does user own campground
		Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			req.flash("error", "Not found");
			res.redirect("/campgrounds");
		}
		else{
			if(foundCampground.author.id.equals(req.user._id)){
				next();
			}
			//otherwise, redirect
			else{
				res.redirect("back");
			}	
		}
	});
	}
	//if not, redirect
	else{
		res.redirect("back");
	}
};

middlewareObj.checkCommentOwnership = function(req,res,next){
	if(req.isAuthenticated()){
		//does user own campground
		Comment.findById(req.params.comment_id, function(err, foundComment){
		if(err){
			req.flash("error", "Not found");
			res.redirect("back");
		}
		else{
			if(foundComment.author.id.equals(req.user._id)){
				next();
			}
			//otherwise, redirect
			else{
				req.flash("error", "You don't have permission to do that")
				res.redirect("back");
			}	
		}
	});
	}
	//if not, redirect
	else{
		req.flash("error", "You need to log in first");
		res.redirect("back");
	}
};

middlewareObj.isLoggedIn = function(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "Please Login First!")
	res.redirect("/login");
}

module.exports = middlewareObj;