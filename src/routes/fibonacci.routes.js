const router = require('express').Router();
const wpid = require("cluster").worker.process.pid;
const fabObj = require("../math-logic/fibonacci-series");

router.get('/', (req, res) => {
  res.send('<h1>Demo Fibonacci Calculator</h1>');
});


router.get("/calculate", (request, response) => {
  console.log(`Worker Process Id ${wpid} has accepted the request!`);
  let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
  response.send(`<h1>${number}</h1>`);
});

module.exports = router;