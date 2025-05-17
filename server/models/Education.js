const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
    description: String
});

module.exports = mongoose.model("Education", EducationSchema);
