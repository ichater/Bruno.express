	const express = require("express"),
		app = express(),
		bodyParser = require("body-parser"),
		mysql = require("mysql"),
		path = require("path"),
		routes = require("router"),
		layout= require("express-layout"),
		mongoose = require("mongoose"),
		methodOveride = require("method-override"),
		touch = require("touch");

mongoose.connect("mongodb://localhost/brunoToDo", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOveride("_method"));

//Schema setup
let brunoSchema = new mongoose.Schema({
	listItem: String
});

let brunoList = mongoose.model("brunoList", brunoSchema);

// List.create({
// 	listItem: "More Bork"
// }, function(err, list){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log("new ToDo: ");
// 		console.log(list);
// 	}
// });


app.get("/", function(req, res){
	res.render("Bruno1.ejs");
});

app.get("/Brunosfriends", function(req, res){
	res.render("brunosFriends.ejs");
});

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

