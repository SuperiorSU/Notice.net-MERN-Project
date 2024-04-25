const express = require('express');
const router = express.Router();

const {signup, login} = require('../controller/userController');
const {adminSignup, adminLogin} = require('../controller/adminController');
// const {auth} = require('../middleware/auth');

// for user
router.post('/signup', signup);
router.post('/login', login);

// for admin
router.post('/adminSignup',adminSignup)
router.post('/adminLogin',adminLogin)

// notice routes
const {createNotice, getNotices, getNoticeByDate,getNoticeByBatch} = require('../controller/noticeController');
router.post('/createNotice', createNotice);
router.get('/getNotices', getNotices);
router.post('/getNoticeByDate', getNoticeByDate);
router.post('/getNoticeByBatch', getNoticeByBatch);


module.exports = router;