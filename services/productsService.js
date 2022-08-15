const productModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

const getById = async (id) => {
  const rows = await productModel.getById(id);
  return rows[0];
};

module.exports = { getAll, getById };