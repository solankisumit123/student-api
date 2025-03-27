    const mongoose = require('mongoose');
    // const Schema = mongoose.Schema;
    // const ObjectId = Schema.ObjectId;
    const student = new mongoose.Schema({
        name: {
            type: String
        },
        email: {
            type: String
            },
        password: {
                type: String
            }
        })

module.exports = mongoose.model('student', student)
    