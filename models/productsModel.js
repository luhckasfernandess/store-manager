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

const create = async (name) => {
  const [createProduct] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?);', [name]);
  const newProduct = { id: createProduct.insertId, name };
  return newProduct;
};

module.exports = { getAll, getById, create };