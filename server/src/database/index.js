import Knex from 'knex';

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: './scheduly.sqlite',
  },
});

export default knex;
