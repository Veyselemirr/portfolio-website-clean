const express = require("express");
const router = express.Router();
const {
    getSkills,
    createSkill,
    updateSkill,
    deleteSkill
} = require("../controllers/skillController");

router.get("/", getSkills);
router.post("/", createSkill);
router.post("/update", updateSkill);
router.post("/delete", deleteSkill);

module.exports = router;
