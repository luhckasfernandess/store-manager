const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
  return products;
};

const getById = async (id) => {
  const [product] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?;', [id]);
  return product;
};

const register = async (name) => {
  const [registerProduct] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?);', [name]);
  const newProduct = { id: registerProduct.insertId, name };
  return newProduct;
};

module.exports = { getAll, getById, register };