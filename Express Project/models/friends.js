const mongoose = require("mongoose");


//Schema setup
    const friendsSchema = new mongoose.Schema({
        friendName: String,
        image: String,
        description: String
    });

    module.exports = mongoose.model("Friend", friendsSchema) 