const request = require('supertest');
const app = require('../../src/server');

describe('CEP Endpoints', () => {
  it('should return an empty array if no CEP has been registered', async () => {
    const res = await request(app)
      .get('/')
      .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.data).toHaveLength(0)
  });

  it('should list all CEPs', async () => {
    const res = await request(app)
      .get('/')
      .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('data')
  });

  it('should create a new cep', async () => {
    const res = await request(app)
      .post('/')
      .send({
        city: 'Mandaguari',
        cep: '86975-000',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('status')
  });


})
