const express = require("express"),
      app = express(),
	   bodyParser = require("body-parser"),
	mysql = require("mysql"),
 	  path = require("path"),
 	  routes = require("router"),
 	  layout= require("express-layout"),
 	  mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/brunoToDo", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

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


app.get("/toDo", function(req, res){
	//Get all toDos from db
	brunoList.find({}, function (err, brunoList){
		if(err){
			console.log(err);
		} else {
			res.render("ToDo.ejs", {brunoList: brunoList});
		}
	});
});

app.post("/addToDo", function(req, res){
	let listItem = req.body.listItem;
	let toDo1 = {brunoList: brunoList}
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

// app.post("/removeToDo", function(req, res){
// 	let rtoDo = req.body.rtoDo;
// 	for(let i = 0; i < brunoList.length; i++){ 
// 		if (brunoList[i] === req.body.rtoDo) {
// 			brunoList.splice(i, 1); 
// 		}
// 	 };
// 	 res.redirect("/toDo")
// 	 console.log("Removed: "  + req.body.removeToDo);
// });


app.listen(3000, function(){
	console.log('listening on port 3000')
});

