const cluster = require("cluster");
const totalCPUs = require('os').cpus().length;
const env = require('./config');

const main = () => {

  if (cluster.isMaster) {
    console.log(`Total Number of CPU Counts is ${totalCPUs}`);
    for (var i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }
    // ONLINE Event
    cluster.on("online", worker => {
        console.log(`Worker Id = ${worker.id} - PID is ${worker.process.pid}`);
    });
    cluster.on("exit", worker => {
        console.log(`Worker Id ${worker.id} - PID is ${worker.process.pid} is offline`);
        console.log("Let's fork new worker!");
        cluster.fork();
    });
  }
  else {
      const app = require('./app');
      app.listen(env.PORT);
      console.log(`(wpid: ${cluster.worker.process.pid}): Server listen on port ${env.PORT}`);
  }

};


main();
