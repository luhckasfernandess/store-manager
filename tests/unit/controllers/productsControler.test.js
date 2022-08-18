const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const productsService = require('../../../services/productsService');
const productsControler = require('../../../controllers/productsControler');

const testController = async (controller, request = {}) => {
  const result = {
    json: undefined,
    status: undefined,
  };
  const response = {
    json: (obj) => {
      result.json = obj;
      return null;
    },
    status: (num) => {
      result.status = num;
      return response;
    }
  };
  await controller(request, response);
  return result;
};

describe('Test Controler Layer', () => {
  describe('getAll Method', () => {
    before(() => {
      Sinon.stub(productsService, 'getAll').resolves([{
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
      }]);
    });
    after(() => {
      productsService.getAll.restore();
    });
    it('Tests if it returns the status is 200', async () => {
      const result = await testController(productsControler.getAll);
      expect(result.status).to.be.equal(200);
    });
    it('Tests if it returns the json with an object with all products', async () => {
      const result = await testController(productsControler.getAll);
      expect(result.json).to.be.deep.equal([{
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
        }]);
    });
  });
  /* describe('getById Method', () => {
    before(() => {
      Sinon.stub(productsService, 'getById').resolves({
        "id": 1,
        "name": "Martelo de Thor"
      });
    });
    after(() => {
      productsService.getAll.restore();
    });
    it('Tests if it returns the status is 200', async () => {
      const result = await testController(productsControler.getAll);
      expect(result.status).to.be.equal(200);
    });
    it('Tests if it returns the json with an object with only one product', async () => {
      const result = await testController(productsControler.getAll);
      expect(result.body.length).to.be.equal(1);
    });
  }); */
});
