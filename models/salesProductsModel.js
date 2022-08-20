/* const connection = require('./connection');

const registerSaleProduct = async () => {
  const [sale] = await connection.execute(`INSERT INTO
  StoreManager.sales (date) VALUES (DATETIME());`);
  const newSale = { id: sale.insertId };
  return newSale;
};

module.exports = { registerSaleProduct };
 */