const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_ controller');

router.get('/profile', usersController.profile);

module.exports = router;