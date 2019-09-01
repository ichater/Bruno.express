let express = require("express");
let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("Bruno1.ejs");
});

app.get("/Brunosfriends", function(req, res){
	res.render("brunosFriends.ejs")
});

app.get("/survey", function(req, res){
	res.render("brunosSurvey.ejs")
});

app.get("/toDo", function(req, res){
	res.render("ToDo.ejs")
});


app.listen(3000, function(){
	console.log('listening on port 3000')
});