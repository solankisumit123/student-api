var student= require("../models/student");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// creat student

exports.student_create = async(req,res)=>{
    var student_email = await student.find({email:req.body.email});
    var password = await bcrypt.hash(req.body.password, 10);
    req.body.password = password;

    if(student_email == 0){
        var data = await student.create(req.body);
        res.status(200).json({
            status: "student create successfully..!",
            data
        })
    }else{
        res.status(200).json({
            status: "student email id alredy exist try Another way ",
            data
        })
        }
}

// student login
exports.student_login = async(req,res)=> {
    var student_email = await student.find({email:req.body.email});
    if(student_email.length > 0){
        var password = await bcrypt.compare(req.body.password,student_email[0].password);
        if(password){
            res.status(200).json({
                status: "student login successfully..!",
                student_email
            })
        }
        else{
            res.status(200).json({
                status: "password not match..!"
            })
        }
    }
    else{
        res.status(200).json({
            status: "email not found..!"
        })
    }
}

// view student
exports.view_student = async (req, res) => {
    var data = await student.find();
    res.status(200).json({
        message: "student  Found..!",
        data: data
    })
}





// update student
exports.update_student = async(req,res) =>{
    var id = req.params.id;
    var data = await student.findByIdAndUpdate(id,req.body);   
    res.status(200).json({
        status:"student Updated..!",
        data: data
    })
} 
// delete student
exports.delete_student = async (req, res) => {
    var data = await student.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: "student delete successfully..!",
        data
    })
}
