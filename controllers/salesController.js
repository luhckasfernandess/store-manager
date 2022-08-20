const salesService = require('../services/salesService');

const registerSale = async (_req, res) => {
  const newSale = await salesService.registerSale();
  return res.status(201).json(newSale);
};

module.exports = { registerSale };
