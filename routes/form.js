
const { createForm, fillData, getData } = require("../controllers/form.controller");
const express = require("express");
const formRouter = express.Router();

formRouter.post('/form', createForm)
formRouter.post('/fill_data', fillData)
formRouter.get('/fill_data', getData)


module.exports = {formRouter}