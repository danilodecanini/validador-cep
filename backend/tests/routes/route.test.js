const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const request = require('supertest');
const CEP = require('../../src/app/models/CEP');
const app = require('../../src/app');

describe('CEP Endpoints', () => {

  beforeEach(function (done) {
    function clearDB() {
      var promises = [
        CEP.remove().exec(),
      ];

      Promise.all(promises)
        .then(function () {
        done();
      })
    }

    if (mongoose.connection.readyState === 0) {
      mongoose.connect(`mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/cep-test?retryWrites=true&w=majority`, function (err) {
        if (err) {
          throw err;
        }
        return clearDB();
      });
    } else {
        return clearDB();
    }
  });

  it('should return a message saying there is no cep found if no CEP has been registered', async () => {
    const res = await request(app)
      .get('/')
      .send()
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Não foram encontrados nenhum CEP cadastrado!');
  });

  it('should create a new cep', async () => {
    const res = await request(app)
      .post('/')
      .send({
        city: 'Mandaguari',
        cep: '874561',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('status')
  });

  it('should list all CEPs', async () => {

    const res = await request(app)
      .post('/')
      .send({
        city: 'Mandaguari',
        cep: '874561',
      })
    expect(res.statusCode).toEqual(201)

    const res1 = await request(app)
      .get('/')
      .send()
    expect(res1.statusCode).toEqual(200)
    expect(res1.body).toHaveProperty('data')
  });


})
