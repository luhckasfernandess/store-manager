const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
    const products = await productsService.getAll();
    return res.status(200).json(products);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const product = await productsService.getById(id);
    return res.status(200).json(product);
};

const register = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productsService.register(name);
  return res.status(201).json(newProduct);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedProduct = await productsService.updateById(id, name);
  return res.status(200).json(updatedProduct);
};

module.exports = { getAll, getById, register, updateById };