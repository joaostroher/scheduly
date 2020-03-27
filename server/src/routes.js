import { Router } from 'express';

import CustomerController from '~/app/controllers/CustomerController';
import ScheduleController from '~/app/controllers/ScheduleController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ test: true });
});

routes.get('/customers', CustomerController.index);

routes.get('/schedules', ScheduleController.index);
routes.post('/schedules', ScheduleController.store);
routes.delete('/schedules/:scheduleId', ScheduleController.destroy);

export default routes;
