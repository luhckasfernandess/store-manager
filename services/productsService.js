const { productNotFound } = require('../middlewares/validations');
const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  productNotFound(product);
  return product[0];
};

module.exports = { getAll, getById };