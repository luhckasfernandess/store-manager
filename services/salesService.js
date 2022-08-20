// const CustomerError = require('../errors/CustomerError');
const salesModel = require('../models/salesModel');

const registerSale = async () => {
  const newSale = await salesModel.registerSale();
  return newSale;
};

module.exports = { registerSale };