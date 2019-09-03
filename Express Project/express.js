const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mysql = require("mysql");
const path = require("path");
const routes = require("router");
const layout= require("express-layout");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("Bruno1.ejs");
});

app.get("/Brunosfriends", function(req, res){
	res.render("brunosFriends.ejs");
});

app.get("/survey", function(req, res){
	res.render("brunosSurvey.ejs");
});

let list = ["hug mum", "eat food"];

app.get("/toDo", function(req, res){
	res.render("ToDo.ejs", {list: list});
});

app.post("/addToDo", function(req, res){
	let newToDo = req.body.newToDo;
	list.push(newToDo);
	res.redirect("/toDo");
	console.log(req.body.newToDo);
});

app.post("/removeToDo", function(req, res){
	let rtoDo = req.body.rtoDo;
	for(let i = 0; i < list.length; i++){ 
		if (list[i] === req.body.rtoDo) {
			list.splice(i, 1); 
		}
	 };
	 res.redirect("/toDo")
	 console.log("Removed: "  + req.body.removeToDo);
});


app.listen(3000, function(){
	console.log('listening on port 3000')
});