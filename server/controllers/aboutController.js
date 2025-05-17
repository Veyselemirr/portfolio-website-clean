const About = require("../models/About");

// GET
exports.getAbout = async (req, res) => {
    try {
        const about = await About.find();
        res.status(200).json(about);
    } catch (err) {
        res.status(500).json({ error: "Veri alınamadı", detail: err.message });
    }
};

// POST
exports.createAbout = async (req, res) => {
    try {
        const newAbout = new About(req.body);
        await newAbout.save();
        res.status(201).json(newAbout);
    } catch (err) {
        res.status(500).json({ error: "Kayıt başarısız", detail: err.message });
    }
};

// PUT - Body'den id al
exports.updateAbout = async (req, res) => {
    try {
        const { _id, description } = req.body;
        if (!_id) return res.status(400).json({ error: "_id alanı zorunludur" });

        const updated = await About.findByIdAndUpdate(_id, { description }, { new: true });
        if (!updated) return res.status(404).json({ error: "Kayıt bulunamadı" });

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ error: "Güncelleme hatası", detail: err.message });
    }
};

// DELETE - Body'den id al
exports.deleteAbout = async (req, res) => {
    try {
        const { _id } = req.body;
        if (!_id) return res.status(400).json({ error: "_id alanı zorunludur" });

        const deleted = await About.findByIdAndDelete(_id);
        if (!deleted) return res.status(404).json({ error: "Silinecek kayıt bulunamadı" });

        res.status(200).json({ message: "Silindi" });
    } catch (err) {
        res.status(500).json({ error: "Silme hatası", detail: err.message });
    }
};
