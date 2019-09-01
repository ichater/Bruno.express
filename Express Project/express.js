let express = require("express");
let app = express();
let bodyParser = require("body-parser")

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
	let list = ["hug mum", "eat food", "bork twice"];
	res.render("ToDo.ejs", {list: list});
});

app.post("/addToDo", function(req, res){
	let newToDo = req.body.newToDo;
	newToDo.push(newToDo);
	res.redirect("/toDo");
});


app.listen(3000, function(){
	console.log('listening on port 3000')
});