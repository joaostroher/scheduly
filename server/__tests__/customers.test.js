import request from 'supertest';
import faker from 'faker-br';
import app from '~/app';
import clearDatabase from './utils/clearDatabase';
import seeds from './utils/seeds';

describe('customers', () => {
  beforeEach(async () => {
    await clearDatabase();
  });

  test('should be able to create customer', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
      });

    expect(response.status).toBe(200);
  });
  /*
  test('should be able to edit customer', async () => {
    const customer = await seeds.createCustomer();
    const response = await request(app)
      .put(`/api/customers/${customer.id}`)
      .send({ name: faker.name.findName() });
    expect(response.status).toBe(200);
  });

  test('should be return error when invalid cpf informated', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        cpf: '111',
      });

    expect(response.status).toBe(400);
  });

  test('should be return error when invalid phone informated', async () => {
    const response = await request(app)
      .post('/api/customers')
      .send({
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: '111',
      });

    expect(response.status).toBe(400);
  });
  */
});
