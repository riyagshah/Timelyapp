const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://shashankfeb16:Ilovecricket@cluster0.frvspea.mongodb.net/?retryWrites=true&w=majority");

module.exports = connection;