const express = require("express");
const router = express.Router();
const {
    getEducation,
    createEducation,
    updateEducation,
    deleteEducation
} = require("../controllers/educationController");

router.get("/", getEducation);
router.post("/", createEducation);
router.post("/update", updateEducation);
router.post("/delete", deleteEducation);

module.exports = router;
