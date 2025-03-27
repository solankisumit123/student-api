var admin = require("../models/admin");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// creat student
exports.admin_create = async (req, res) => {
    const { name, email, password } = req.body
    const newadmin = newadmin({
        name,
        email,
        password
    })
    newadmin.save()
    res.status(200).json({
        status: "student add successfully..!",
        newadmin
    })
}
// student login
exports.admin_login = async (req, res) => {
    const { email, password } = req.body
    constadmin = awaitadmin.findOne({ email })
    if (adadmin) {
        const validPassword = await bcrypt.compare(password,admin.password)
        if (validPassword) {
            const token = jwt.sign({
                name:admin.name,
                email:admin.email,
                password:admin.password
            }, 'secret')
            res.status(200).json({
                status: "login successfully..!",
                token
            })
        } else {
            res.status(400).json({
                status: "password not match..!"
            })
        }
    } else {
        res.status(400).json({
            status: "email not found..!"
        })
    }
}