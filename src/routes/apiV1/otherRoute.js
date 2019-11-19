const { Router } = require('express');

// Importing endpoints to application resources
const authRoute = require('./authRoute');

const router = new Router();

// Regular Endpoints
// router.get('/gifs/:gifId', Auth.verifyToken, gifs.getOneGif);

// Login/Register Router
router.use('/auth', authRoute);

module.exports = router;
