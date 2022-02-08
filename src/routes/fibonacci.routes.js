const router = require('express').Router();
const logger = require('../logger');
const worker = require("cluster").worker;
const fabObj = require("../math-logic/fibonacci-series");

router.get('/', (req, res) => {
  res.send('<h1>Demo Fibonacci Calculator</h1>');
});


router.get("/calculate", (request, response) => {
  logger.info(`Worker ${worker.id} has accepted the request!`);
  let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
  // logger.info(`Worker ${worker.id} complete the request!`);
  response.send(`<h1>${number}</h1>`);
});

module.exports = router;