const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Yükleme klasörü ve dosya adı ayarı
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // klasörün mevcut olduğundan emin ol
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

// Tek bir görsel upload endpoint'i
router.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Görsel dosyası yüklenemedi" });
    }

    const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    res.status(200).json({ url: imageUrl });
});

module.exports = router;
