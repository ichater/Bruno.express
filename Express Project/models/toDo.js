const mongoose = require("mongoose");

//Schema setup
let brunoSchema = new mongoose.Schema({
	listItem: String
});

module.exports = mongoose.model("brunoList", brunoSchema);