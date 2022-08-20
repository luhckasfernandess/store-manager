const { expect } = require('chai');
const { assert } = require('joi');
const { describe } = require('mocha');
const Sinon = require('sinon');

const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

describe('Test Services Layer', () => {
  describe('Method Get All Products', () => {
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
  describe('Method Get By Id Product', () => {
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
  describe('Method Register New Product', () => {
    before(() => {
      Sinon.stub(productsModel, 'register').resolves({ id: 4, name: 'Product X' });
    });
    after(() => {
      productsModel.register.restore();
    });
    it('test if name is required', async () => {
      try {
        expect(await productsService.register()).not.to.throw('"name" is required');
      } catch (error) {
        // const logError = { status: error.status, message: error.message };
        expect(error.message).to.be.equal('"name" is required');
      }
    });
    it('tests if the name has at least 5 characters', async () => {
      try {
        const name = 'Prod'
        expect(await productsService.register(name)).not.to.throw('"name" length must be at least 5 characters long');
      } catch (error) {
        expect(error.message).to.be.equal('"name" length must be at least 5 characters long');
      }
    });
    it('tests if it returns an object with the registered product', async () => {
      const name = 'Product X';
      const result = await productsService.register(name);
      expect(result).to.be.deep.equal({ id: 4, name: 'Product X' });
    });
  });
});

