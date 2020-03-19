module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './scheduly.sqlite3',
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations',
    },
  },
};
