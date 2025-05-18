const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Dosya kaydı için yapılandırma
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, 'cv.pdf'); // Yüklenen dosya hep bu isimde olur
    }
});

const upload = multer({ storage: storage });

// CV yükleme
router.post('/upload', upload.single('cv'), (req, res) => {
    res.json({ message: 'CV başarıyla yüklendi', url: '/uploads/cv.pdf' });
});

// CV erişimi
router.get('/', (req, res) => {
    res.json({ url: '/uploads/cv.pdf' });
});



module.exports = router;