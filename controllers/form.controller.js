const Form = require("../models/Form");
const uuid = require('uuid');
const FormData = require("../models/FormData");


const createForm = async (req, res) => {
    try {
        const { uniqueId, title, name, email, phoneNumber, isGraduate } = req.body;
        const newForm = await Form.create({ uniqueId, title, name, email, phoneNumber, isGraduate });
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const fillData = async (req, res) => {
    try {
        const { name, email, phoneNumber, isGraduate } = req.body;
        const { form_title } = req.query;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            return res.status(400).json({ error: 'Invalid phone number format. Please enter a 10-digit number.' });
        }

        if (!name || typeof name !== 'string') {
            return res.status(400).json({ error: 'Name is required and must be a string' });
        }

        if (typeof isGraduate !== 'boolean') {
            return res.status(400).json({ error: 'isGraduate must be a boolean value' });
        }

        const uniqueId = uuid.v4();

        const form = await Form.findOne({ where: { title: form_title } });
        if (!form) {
            return res.status(404).json({ error: 'Form not found' });
        }

        const formData = await FormData.create({ uniqueId, name, email, phoneNumber, isGraduate, formTitle: form_title });
        res.status(201).json(formData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getData = async (req, res) => {
    try {
        const { form_title } = req.query;

        const form = await Form.findOne({ where: { title: form_title }});
        if (!form) {
            return res.status(404).json({ error: 'Form not found' });
        }

        const formData = await FormData.findAll({ where: { formTitle: form_title } });
        res.status(200).json(formData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { 
    createForm,
    fillData,
    getData
};


