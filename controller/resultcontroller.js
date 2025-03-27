var result = require("../models/result")

// create student result
exports.create_result = async (req, res) => {
    var data = await result.create(req.body);
    res.status(200).json({
        status: "User Created..!",
        data
    })
}

//  get student result
exports.get_student_result = async (req, res) => {
    const data = await result.find()
    res.status(200).json({
        status: "student result get successfully..!",
        data
    })
}




// update student result
exports.update_student_result = async (req, res) => {
    var data = await result.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        status: "student result update successfully..!",
        data
        })
    }

    
// delete student result
exports.delete_student_result = async (req, res) => {
    var data = await result.findByIdAndDelete(req.params.id)
    res.status(200).json({ 
        status: "student result delete successfully..!",
        data
    })
}

// view top 5 student
exports.view_top5_result = async (req, res) => {
    const data = await result.find().sort({marks: -1}).limit(5)
    res.status(200).json({
        status: "student result view successfully..!",
        data
    })
    }

