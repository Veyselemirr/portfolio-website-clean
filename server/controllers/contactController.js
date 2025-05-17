const Contact = require("../models/Contact");

exports.getContact = async (req, res) => {
    try {
        const contact = await Contact.findOne();
        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const saved = await newContact.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
