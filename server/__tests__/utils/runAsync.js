export default function runAsync(asyncFunction) {
  return done => {
    asyncFunction()
      .then(() => {
        done();
      })
      .catch(() => {
        done();
      });
  };
}
