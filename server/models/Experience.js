const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    date: String,
    role: String,
    company: String,
    description: String
});

module.exports = mongoose.model('Experience', experienceSchema);