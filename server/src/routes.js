import { Router } from 'express';

import CustomerController from '~/app/controllers/CustomerController';

const routes = new Router();

routes.get('/customers', CustomerController.index);

export default routes;
