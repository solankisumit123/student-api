var express = require('express');
var router = express.Router();
var data = require('../controller/admincontroller')
var user = require('../controller/studentcontroller')
var result = require('../controller/resultcontroller');

//  student
router.post('/student_create', user.student_create);
router.post('/student_login', user.student_login);
router.get('/view_student', user.view_student);
router.post('/update_student/:id', user.update_student);
router.get('/delete_student/:id', user.delete_student);
// result   
router.post('/create_result', result.create_result);
router.get('/view_student', result.get_student_result);
router.post('/update_student_result/:id', result.update_student_result);
router.get('/delete_student_result/:id', result.delete_student_result);
router.get('/view_top5_result', result.view_top5_result);
// admin
router.post('/admin_create', data.admin_create);
router.post('/admin_login', data.admin_login);

module.exports = router;