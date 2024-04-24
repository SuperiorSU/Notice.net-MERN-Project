const express = require('express');
const router = express.Router();

const {signup, login} = require('../controller/userController');
const {adminSignup, adminLogin} = require('../controller/adminController');
const {auth} = require('../middleware/auth');

router.post('/signup', signup);
router.post('/login', login);
router.post('/adminSignup',adminSignup)
router.post('/adminLogin',adminLogin)

module.exports = router;