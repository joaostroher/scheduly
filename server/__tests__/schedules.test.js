import request from 'supertest';
import faker from 'faker';
import { Types } from 'mongoose';
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

  test('should be able to block schedule creation in same date time', async () => {
    const schedule = await seeds.createSchedule();
    const { date_time_start, customer_id, service_id, observation } = schedule;
    const response = await request(app)
      .post(`/api/schedules/`)
      .send({ date_time_start, customer_id, service_id, observation });
    expect(response.status).toBe(400);
  });

  test('should be able to block schedule creation in past date time', async () => {
    const customer = await seeds.createCustomer();
    const service = await seeds.createService();
    const data = {
      date_time_start: faker.date.past(),
      customer_id: customer.id,
      service_id: service.id,
      observation: faker.lorem.paragraph(),
    };

    const response = await request(app)
      .post(`/api/schedules/`)
      .send(data);
    expect(response.status).toBe(400);
  });

  test('should be able to block schedule creation with invalid customer_id', async () => {
    const service = await seeds.createService();
    const data = {
      date_time_start: faker.date.future(),
      customer_id: Types.ObjectId(),
      service_id: service.id,
      observation: faker.lorem.paragraph(),
    };

    const response = await request(app)
      .post(`/api/schedules/`)
      .send(data);
    expect(response.status).toBe(400);
  });

  test('should be able to block schedule creation with invalid service_id', async () => {
    const customer = await seeds.createCustomer();
    const data = {
      date_time_start: faker.date.future(),
      customer_id: customer.id,
      service_id: Types.ObjectId(),
      observation: faker.lorem.paragraph(),
    };

    const response = await request(app)
      .post(`/api/schedules/`)
      .send(data);
    expect(response.status).toBe(400);
  });
});
