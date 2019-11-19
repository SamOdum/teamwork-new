const { Router } = require('express');
const users = require('../../controller/users');

// const { Auth } = require('../../middleware/Auth');

const router = new Router();

router.post('/5up3r', users.create);

module.exports = router;
