require('dotenv/config');

const mongoUrl = process.env.MONGO_URL;
const url = mongoUrl.substring(0, mongoUrl.lastIndexOf('/'));
const databaseName = mongoUrl.substring(mongoUrl.lastIndexOf('/') + 1);

module.exports = {
  mongodb: {
    url,
    databaseName,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: 'src/database/migrations',
  changelogCollectionName: 'migrations',
  migrationFileExtension: '.js',
};
