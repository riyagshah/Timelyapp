const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://arjunbhakuni23:arjunbhakuni23@cluster0.jervgnr.mongodb.net/timely?retryWrites=true&w=majority");

module.exports = connection;