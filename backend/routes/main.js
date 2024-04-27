const express = require('express');
const router = express.Router();

const {signup, login,getAllStudents,getAllTeachers,deleteUser,blockBatch} = require('../controller/userController');
const {adminSignup, adminLogin} = require('../controller/adminController');
const {auth} = require('../middleware/auth');
const {isAdmin, isTeacher} = require('../middleware/auth');

// for user
router.post('/signup', signup);
router.post('/login', login);
// get all students route
router.get('/allStudents', getAllStudents);
// get all teachers
router.get('/allTeachers', getAllTeachers);
// delete user via id
router.delete('/deleteUser/:id', deleteUser);
// block the batch registration\
router.put('/blockBatch/:batch',isAdmin, blockBatch);
// for admin
router.post('/adminSignup',adminSignup)
router.post('/adminLogin', isAdmin, adminLogin)

// notice routes
const {createNotice, getNotices, getNoticeByDate,getNoticeByBatch,deleteNotice} = require('../controller/noticeController');
router.post('/createNotice',isTeacher, createNotice);
router.get('/getNotices', getNotices);
router.post('/getNoticeByDate', getNoticeByDate);
router.post('/getNoticeByBatch', getNoticeByBatch);
router.delete('/deleteNotice/:id', deleteNotice);


module.exports = router;