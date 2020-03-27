export default {
  url: process.env.MONGO_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
};
