const connection = require('./connection');

const registerSale = async () => {
  const [sale] = await connection.execute(`INSERT INTO
  StoreManager.sales (date) VALUES (DATETIME());`);
  const newSale = { id: sale.insertId };
  return newSale;
};

module.exports = { registerSale };
