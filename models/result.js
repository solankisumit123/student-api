var mongoose = require("mongoose");

const result = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    rollno: { 
        type: Number, 
      
    },
    subject: { 
        type: String, 
        
    },
    marks: { 
        type: Number, 
       
    },
    grade: { 
        type: String ,
    },
  });


module.exports = mongoose.model('result', result)