const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email: String,
    profileImage: String,
    socialLinks: [
        {
            name: String,         // Örn: "GitHub"
            iconKey: String,      // Örn: "FaGithub"
            url: String           // Örn: "https://github.com/..."
        }
    ]
});

module.exports = mongoose.model("Contact", contactSchema);
