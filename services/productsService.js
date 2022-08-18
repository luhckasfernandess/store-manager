const ProductNotFound = require('../errors/ProductNotFound');
const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  console.log(product);
  if (!product) throw new ProductNotFound(404, 'Product not found');
  return product[0];
};

module.exports = { getAll, getById };