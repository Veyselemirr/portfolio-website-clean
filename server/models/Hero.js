const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    greeting: String,
    subtitle: String,
    cta: String,
});

module.exports = mongoose.model('Hero', heroSchema);
