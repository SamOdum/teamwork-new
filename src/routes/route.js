const { Router } = require('express');


// Import API versions
const apiV1 = require('./apiV1/otherRoute');


// Creating an express Router object.
const router = new Router();


// API v1 is currently in use.
router.use('/v1', apiV1);

module.exports = router;
