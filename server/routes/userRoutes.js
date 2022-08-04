const express = require('express');
const { signup, login, logout, protect } = require('../controllers/authController');
const { updateMe, deleteMe, getMe, getUser } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);

router.get('/me', protect, getUser);

module.exports = router;