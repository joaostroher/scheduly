exports.up = knex => {
  return knex.schema.createTable('customers', table => {
    table.increments('id');
    table.string('name', 60);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('customers');
};
