const cluster = require("cluster");
const totalCPUs = require('os').cpus().length;
const env = require('./config');
const logger = require('./logger');

const main = () => {

  if (cluster.isMaster) {
    logger.info(`Total Number of CPU Counts is ${totalCPUs}`);
    for (var i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
    // ONLINE Event
    cluster.on("online", worker => {
        logger.info(`Worker Id = ${worker.id} - PID is ${worker.process.pid}`);
    });
    cluster.on("exit", worker => {
        logger.info(`Worker Id ${worker.id} - PID is ${worker.process.pid} is offline`);
        logger.info("Let's fork new worker!");
        cluster.fork();
    });
  }
  else {
      const app = require('./app');
      app.listen(env.PORT);
      logger.info(`(wpid: ${cluster.worker.process.pid}): Server listen on port ${env.PORT}`);
  }

};


main();
