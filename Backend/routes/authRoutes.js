const express = require('express');
const { register, login, checkAuth } = require( '../controllers/authController.js');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', checkAuth);

module.exports = router;