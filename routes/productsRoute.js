const express = require('express');

const productsRoute = express.Router();

const productsControler = require('../controllers/productsControler');

productsRoute.get('/', productsControler.getAll);

productsRoute.get('/:id', productsControler.getById);

productsRoute.post('/', productsControler.register);

module.exports = productsRoute;