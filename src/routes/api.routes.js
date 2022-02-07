const router = require('express').Router();
const VERSION = require('../config').VERSION;

router.get('/', (req, res) => {
  res.json( {'version': VERSION} );
});


module.exports = router;
