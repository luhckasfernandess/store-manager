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
  const [newProduct] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUE', [name]);
  console.log(newProduct);
  return newProduct;
};

module.exports = { getAll, getById, create };