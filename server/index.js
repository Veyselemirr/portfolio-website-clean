const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const heroRoutes = require('./routes/heroRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const cvRoutes = require('./routes/cvRoutes');
const aboutRoutes = require("./routes/aboutRoutes");
const imgRoutes = require("./routes/imgRoutes");
const skillRoutes = require("./routes/skillRoutes");
const educationRoutes = require("./routes/educationRoutes");
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/img", imgRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/about", aboutRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/cv', cvRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/hero', heroRoutes);

// MongoDB bağlantısı
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB bağlantısı başarılı');
    app.listen(process.env.PORT, () => {
        console.log(`✅ Sunucu çalışıyor: http://localhost:${process.env.PORT}`);
    });
}).catch(err => {
    console.error('❌ MongoDB bağlantı hatası:', err);
});
