const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
    description: String
});

module.exports = mongoose.model("About", AboutSchema);
