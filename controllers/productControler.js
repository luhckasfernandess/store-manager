const productService = require('../services/productService');

const ERROR_MESSAGE = 'Server error';

const getAll = async (_req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE });
  }
};

module.exports = { getAll, getById };