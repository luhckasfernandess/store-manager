const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

describe('Test Services Layer', () => {
  describe('/products route', () => {
    before(() => {
      Sinon.stub(productsModel, 'getAll').resolves([[
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
      productsModel.getAll.restore();
    });
    it('Tests if it returns an array', async () => {
      const result = await productsService.getAll();
      expect(result).to.be.a('array');
    });
    it('Tests if all products are returned', async () => {
      const result = await productsService.getAll();
      expect(result[0].length).to.be.equal(3);
    });
  });
  describe('/products/:id route', () => {
    before(() => {
      Sinon.stub(productsModel, 'getById').resolves([[
        {
          "id": 1,
          "name": "Martelo de Thor"
        }
      ]]);
    });
    after(() => {
      productsModel.getById.restore();
    });
    it('Tests if it returns only the product with the id of the url', async () => {
      const result = await productsService.getById();
      expect(result.length).to.equal(1);
    });
  });
});

