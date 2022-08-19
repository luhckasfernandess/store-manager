const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const productsModel = require('../../../models/productsModel');

describe('Test Models Layer', () => {
  describe('Get All Products', () => {
    before(() => {
      Sinon.stub(connection, 'execute').resolves([[
        {
          "id": 1,
          "name": "Martelo de Thor"
        },
        {
          "id": 2,
          "name": "Traje de encolhimento"
        },
        {
          "id": 3,
          "name": "Escudo do Capitão América"
        }
      ]]);
    });
    after(() => {
      connection.execute.restore();
    });
    it('Tests if it returns an array', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.a('array');
    });
    it('Tests if all products are returned', async () => {
      const result = await productsModel.getAll();
      expect(result.length).to.be.equal(3);
    });
  });
  describe('Get By Id Product', () => {
    before(() => {
      Sinon.stub(connection, 'execute').resolves([[
        {
          "id": 1,
          "name": "Martelo de Thor"
        },
      ]]);
    });
    after(() => {
      connection.execute.restore();
    });
    it('Tests if only the product with the id present in the url was returned', async () => {
      const result = await productsModel.getById(1);
        expect(result).to.be.deep.equal([{
          "id": 1,
          "name": "Martelo de Thor"
        }]);
    });
  });
  describe('Register New Product', () => {
    before(() => {
      Sinon.stub(connection, 'execute').resolves([{
        fieldCount: 0,
        affectedRows: 1,
        insertId: 4,
        info: '',
        serverStatus: 2,
        warningStatus: 0,
      }]);
    });
    after(() => {
      connection.execute.restore();
    });
    it('Tests if all products are returned', async () => {
      const name = 'Product X';
      const result = await productsModel.register(name);
      const newProduct = { id: 4, name };
      expect(result).to.be.deep.equal(newProduct);
    });
  });
});

