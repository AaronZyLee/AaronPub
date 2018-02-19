var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
	mongoose   = require("mongoose"),
	passport   = require("passport"),
	LocalStrategy = require("passport-local"),
	flash      = require("connect-flash"),
	User       = require("./models/user"),
	Campground = require("./models/campground"),
	Comment    = require("./models/comment"),
	methodOverride = require("method-override"),
	seedDB     = require("./seeds");

//require routes
var commentRoutes = require("./routes/comments"),
	campgroundRoutes = require("./routes/campgrounds"),
	indexRoutes = require("./routes/index");

//seedDB();
var DB_url = process.env.DATABASEURL || "mongodb://localhost/cocktail_menu";
mongoose.connect(DB_url);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//Passport Configuration
app.use(require("express-session")({
	secret: "Martini is my favourite",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
})

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);



app.listen(process.env.PORT || 8080, process.env.IP, function(){
	console.log("sever has been started!");
});