/* const connection = require('./connection');

const registerSale = async () => {
  const [sale] = await connection.execute(`INSERT INTO
  StoreManager.sales (date) VALUES (DATETIME());`);
  const idSale = { id: sale.insertId };
  return idSale;
};

module.exports = { registerSale }; */
