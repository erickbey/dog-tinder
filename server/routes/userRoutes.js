const express = require('express');
const { signup, login, logout } = require('../controllers/authController');
const { updateMe, deleteMe } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.patch('/updateMe', updateMe);
router.delete('/deleteMe', deleteMe);

module.exports = router;