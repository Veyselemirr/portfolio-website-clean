const express = require("express");
const router = express.Router();
const {
    getAbout,
    createAbout,
    updateAbout,
    deleteAbout
} = require("../controllers/aboutController");

router.get("/", getAbout);
router.post("/", createAbout);
router.post("/update", updateAbout);
router.post("/delete", deleteAbout);

module.exports = router;
