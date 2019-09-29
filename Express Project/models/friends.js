const mongoose = require("mongoose");


//Schema setup
let friendsSchema = new mongoose.Schema({
    friendName: String,
    image: String,
    description: String
});

module.exports = mongoose.model("Friend", friendsSchema) 