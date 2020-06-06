import { Router } from 'express';

import CustomerController from '~/app/controllers/CustomerController';
import ScheduleController from '~/app/controllers/ScheduleController';
import ServicesController from '~/app/controllers/ServicesController';

const routes = new Router();

routes.get('/customers', CustomerController.index);
routes.post('/customers', CustomerController.post);
routes.put('/customers/:id', CustomerController.put);
routes.delete('/customers/:id', CustomerController.destroy);

routes.get('/schedules', ScheduleController.index);
routes.post('/schedules', ScheduleController.store);
routes.delete('/schedules/:scheduleId', ScheduleController.destroy);

routes.get('/services', ServicesController.index);
routes.post('/services', ServicesController.post);
routes.put('/services/:id', ServicesController.put);
routes.delete('/services/:id', ServicesController.destroy);

export default routes;
