import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
// import path from 'path';
import Youch from 'youch';
import cors from 'cors';
import { ValidationError } from 'yup';

import '~/database';
import routes from '~/routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/api', routes);
    /*
    this.server.use(express.static(path.resolve(__dirname, '..', 'public')));
    this.server.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
    );
    */
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (err instanceof ValidationError) {
        const errors = err.inner.map(({ path, type, message }) => ({
          path,
          type,
          message,
        }));
        const { message } = err;
        return res.status(400).json({ message, errors });
      }
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toHTML();
        return res.status(500).send(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
