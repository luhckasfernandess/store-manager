/* const productsSchema = require('./productsSchema');

const productsValidate = (product) => {
  const isValid = productsSchema.validate(product);
  return isValid;
};

const productsMiddleware = (req, res, next) => {
  const { id } = req.params;
  const product = { id };
  const { error } = productsValidate(product);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  next();
};

module.exports = { productsMiddleware }; */