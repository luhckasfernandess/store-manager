const express = require('express');

const productsControler = require('../controllers/productsControler');

const productsRoute = express.Router();

productsRoute.get('/', productsControler.getAll);

productsRoute.get('/:id', productsControler.getById);

module.exports = productsRoute;