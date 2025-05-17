const Education = require("../models/Education");

// GET
exports.getEducation = async (req, res) => {
    try {
        const data = await Education.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Veri alınamadı", detail: err.message });
    }
};

// POST
exports.createEducation = async (req, res) => {
    try {
        const newEdu = new Education(req.body);
        await newEdu.save();
        res.status(201).json(newEdu);
    } catch (err) {
        res.status(500).json({ error: "Kayıt başarısız", detail: err.message });
    }
};

// UPDATE
exports.updateEducation = async (req, res) => {
    try {
        const { _id, description } = req.body;
        if (!_id) return res.status(400).json({ error: "_id gerekli" });

        const updated = await Education.findByIdAndUpdate(_id, { description }, { new: true });
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ error: "Güncelleme hatası", detail: err.message });
    }
};

// DELETE
exports.deleteEducation = async (req, res) => {
    try {
        const { _id } = req.body;
        if (!_id) return res.status(400).json({ error: "_id gerekli" });

        const deleted = await Education.findByIdAndDelete(_id);
        res.status(200).json({ message: "Silindi" });
    } catch (err) {
        res.status(500).json({ error: "Silme hatası", detail: err.message });
    }
};
