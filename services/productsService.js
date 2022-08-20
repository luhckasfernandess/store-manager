const CustomerError = require('../errors/CustomerError');
const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (id) => {
  const [product] = await productsModel.getById(id);
  if (!product) throw new CustomerError(404, 'Product not found');
  return product;
};

const register = async (name, id) => {
  if (name === undefined) throw new CustomerError(400, '"name" is required');
  if (name.length < 5) {
    throw new CustomerError(422, '"name" length must be at least 5 characters long');
  }
  const newProduct = await productsModel.register(name, id);
  return newProduct;
};

const updateById = async (id, name) => {
  const [product] = await productsModel.getById(id);
  if (!product) throw new CustomerError(404, 'Product not found');
  const updatedProduct = await productsModel.updateById(id, name);
  return updatedProduct;
};

module.exports = { getAll, getById, register, updateById };