const productNotFound = (_request, responsse, product) => {
  if (!product) return responsse.status(404).json({ message: 'Product not found' });
};

module.exports = { productNotFound };