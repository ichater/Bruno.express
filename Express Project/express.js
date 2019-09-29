	const express = require("express"),
		app = express(),
		bodyParser = require("body-parser"),
		mysql = require("mysql"),
		path = require("path"),
		routes = require("router"),
		layout= require("express-layout"),
		mongoose = require("mongoose"),
		methodOveride = require("method-override"),
		touch = require("touch"),
		brunoList = require("./models/toDo"),
		friendList = require("./models/friends");

		// mongoose.connect("mongodb://localhost/new_friends", { useNewUrlParser: true });
		mongoose.connect("mongodb://localhost/brunoToDo", { useNewUrlParser: true });
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(express.static("public"));
		app.set("view engine", "ejs");
		app.use(methodOveride("_method"));


// friendList.create({
// 	friendName: "Steph", 
// 	image: "https://cdn.newsapi.com.au/image/v1/67a523605bca40778c6faaad93883a3b", 
// 	description: "DB working again?"
// }, function(err, friend){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("new friend:")
// 		console.log(friend);
// 	}
// });

app.get("/", function(req, res){
	res.render("Bruno1.ejs");
});

app.get("/Brunosfriends", function(req, res){
	friendList.find({}, function (err, friend1){
		if(err){
			console.log(err)
		} else{
			res.render("brunosfriends.ejs",{brunosFriends:friend1})
		}
})
});

app.post("/Brunosfriends", function(req, res){
	let name = req.body.name;
	let image= req.body.image;
	let desc = req.body.description;
	let friend = {name: name, image: image, description: desc};

	friendList.create(friend, function(err, newF){
		if(err){
			console.log(err);
		}	else  {
			res.redirect("/Brunosfriends");
		}	
	});
});

app.get("/Brunosfriends/new", function(req, res){
	res.render("new.ejs");
});


// app.get("/Brunosfriends/:id", function(req,res){
// 	//find friend with provided ID
// 	//render friend proper.
// });



app.get("/survey", function(req, res){
	res.render("brunosSurvey.ejs");
});

app.get("/survey/Q1", function(req, res){
	res.render("Q1.ejs");
});

app.get("/survey/Q2", function(req, res){
	res.render("Q2.ejs");
});

app.get("/survey/Q3", function(req, res){
	res.render("Q3.ejs");
});


app.get("/toDo", function(req, res){
	//Get all toDos from db
	brunoList.find({}, function (err, brunoList1){
		if(err){
			console.log(err);
		} else {
			res.render("ToDo.ejs", {brunoList: brunoList1});
		}
	});
});

app.post("/addToDo", function(req, res){
	let newToDo = req.body.newToDo;
	let toDo1 = {listItem: newToDo}
	//create new ToDo and save to database
	brunoList.create(toDo1, function(err, newtodo1){
		if(err){
			console.log(err);
		} else {
			res.redirect("/toDo");
		}
	})
	console.log(req.body.newToDo);
});

app.get("/addToDo/new", function(req, res){
	res.render("ToDo.ejs");
});


app.delete("/toDo/:id", function(req,res){
	brunoList.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/toDo");
			console.log(err);
		} else {
			res.redirect("/toDo");
		}
	});
});


app.listen(3000, function(){
	console.log('listening on port 3000')
});

