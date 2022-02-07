
const totalCPUs = require('os').cpus().length;

const app = require('./app');

const env = require('./config');

const main = () => {
  app.listen(env.PORT);
  console.log('Server listen on port', env.PORT);
  console.log(`Total Number of CPU Counts is ${totalCPUs}`);
};

main();
