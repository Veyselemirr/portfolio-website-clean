const express = require('express');
const router = express.Router();
const Hero = require('../models/Hero');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// GET /api/hero
router.get('/', async (req, res) => {
    try {
        const heroData = await Hero.find(); // tüm hero'ları getirir
        res.json(heroData);
    } catch (error) {
        res.status(500).json({ message: 'Veri çekme hatası', error: error.message });
    }
});


// POST /api/hero
router.post('/', async (req, res) => {
    try {
        const { greeting, subtitle, cta } = req.body;
        const hero = new Hero({ greeting, subtitle, cta });
        await hero.save();
        res.status(201).json(hero);
    } catch (err) {
        res.status(500).json({ error: 'Kayıt eklenemedi' });
    }
});

router.post('/update', async (req, res) => {
    const { id, greeting, subtitle, cta } = req.body;

    if (!id || !ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Geçersiz veya eksik ID' });
    }

    try {
        const updatedHero = await Hero.findByIdAndUpdate(
            new ObjectId(id),
            { greeting, subtitle, cta },
            { new: true }
        );

        if (!updatedHero) {
            return res.status(404).json({ message: 'Hero bulunamadı' });
        }

        res.json(updatedHero);
    } catch (error) {
        res.status(500).json({ message: 'Güncelleme başarısız', error: error.message });
    }
});
// DELETE body'den ID alarak
router.post('/delete', async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'ID belirtilmedi' });
    }

    try {
        const deletedHero = await Hero.findByIdAndDelete(id);

        if (!deletedHero) {
            return res.status(404).json({ message: 'Hero bulunamadı' });
        }

        res.json({ message: 'Hero başarıyla silindi', id });
    } catch (error) {
        res.status(500).json({ message: 'Silme işlemi başarısız', error: error.message });
    }
});




module.exports = router;
