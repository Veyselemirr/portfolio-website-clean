const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// GET /api/experience
router.get('/', async (req, res) => {
    try {
        const experiences = await Experience.find().sort({ date: -1 });
        res.json(experiences);
    } catch (err) {
        res.status(500).json({ error: 'Veriler alınamadı' });
    }
});

//Post 
router.post('/', async (req, res) => {
    try {
        const { date, role, company, description } = req.body;

        if (!date || !role || !company || !description) {
            return res.status(400).json({ message: 'Tüm alanlar zorunludur.' });
        }

        const newExp = new Experience({ date, role, company, description });
        await newExp.save();
        res.status(201).json(newExp);
    } catch (err) {
        res.status(500).json({ error: 'Kayıt eklenemedi', message: err.message });
    }
});

router.post('/update', async (req, res) => {
    const { id, date, role, company, description } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'ID eksik' });
    }

    try {
        const updated = await Experience.findByIdAndUpdate(
            id,
            { date, role, company, description },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Deneyim bulunamadı' });
        }

        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: 'Güncelleme başarısız', error: err.message });
    }
});

router.post('/delete', async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'ID gönderilmedi' });
    }

    try {
        const deleted = await Experience.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Deneyim bulunamadı' });
        }

        res.json({ message: 'Deneyim silindi', id });
    } catch (err) {
        res.status(500).json({ message: 'Silme başarısız', error: err.message });
    }
});


module.exports = router;