require('dotenv/config');

const url = process.env.MONGO_URL;
const databaseName = url.substring(url.lastIndexOf('/') + 1);

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
