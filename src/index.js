const app = require('./app');

const env = require('./config');

const main = () => {
  app.listen(env.PORT);
  console.log('Server listen on port', env.PORT);
};

main();
