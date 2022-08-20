const express = require('express');

const productsRoute = express.Router();

const productsControler = require('../controllers/productsControler');
// const productsValidation = require('../middlewares/productsValidation');

productsRoute.get('/', productsControler.getAll);

productsRoute.get('/:id', productsControler.getById);

productsRoute.post('/', productsControler.register);

productsRoute.put('/:id', productsControler.updateById);

productsRoute.delete('/:id', productsControler.deleteById);

module.exports = productsRoute;