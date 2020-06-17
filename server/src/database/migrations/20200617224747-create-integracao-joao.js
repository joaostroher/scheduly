module.exports = {
  async up(db, client) {
    await db.collection('testeintegracaojoao').insertOne({ id: 'test' });
  },

  async down(db, client) {
    await db.collection('testeintegracaojoao').drop();
  },
};
