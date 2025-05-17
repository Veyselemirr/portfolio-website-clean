const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    name: String,
    icon: String // frontendde kullanılacak simge class'ı (opsiyonel)
});

module.exports = mongoose.model("Skill", SkillSchema);
