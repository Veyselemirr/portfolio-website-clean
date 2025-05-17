const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (err) {
        res.status(500).json({ error: "Skill verisi alınamadı", detail: err.message });
    }
};

exports.createSkill = async (req, res) => {
    try {
        const newSkill = new Skill(req.body);
        await newSkill.save();
        res.status(201).json(newSkill);
    } catch (err) {
        res.status(500).json({ error: "Skill kaydedilemedi", detail: err.message });
    }
};

exports.updateSkill = async (req, res) => {
    try {
        const { _id, name, icon } = req.body;
        if (!_id) return res.status(400).json({ error: "_id gerekli" });

        const updated = await Skill.findByIdAndUpdate(_id, { name, icon }, { new: true });
        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ error: "Skill güncellenemedi", detail: err.message });
    }
};

exports.deleteSkill = async (req, res) => {
    try {
        const { _id } = req.body;
        if (!_id) return res.status(400).json({ error: "_id gerekli" });

        const deleted = await Skill.findByIdAndDelete(_id);
        res.status(200).json({ message: "Skill silindi" });
    } catch (err) {
        res.status(500).json({ error: "Skill silinemedi", detail: err.message });
    }
};
