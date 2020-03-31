import request from 'supertest';
import faker from 'faker';
import app from '~/app';
import clearDatabase from './utils/clearDatabase';
import seeds from './utils/seeds';

describe('schedules', () => {
  beforeEach(async () => {
    await clearDatabase();
  });

  test('should be able to create schedule', async () => {
    const customer = await seeds.createCustomer();
    const service = await seeds.createService();
    const data = {
      date_time_start: faker.date.future(),
      customer_id: customer.id,
      service_id: service.id,
      observation: faker.lorem.paragraph(),
    };
    const response = await request(app)
      .post('/api/schedules')
      .send(data);

    expect(response.status).toBe(200);
    expect(response.body.status).toEqual('scheduled');
  });

  test('should be able to cancel schedule', async () => {
    const schedule = await seeds.createSchedule();
    const response = await request(app)
      .delete(`/api/schedules/${schedule.id}`)
      .send();
    expect(response.status).toBe(200);
    expect(response.body.status).toEqual('canceled');
  });
});
