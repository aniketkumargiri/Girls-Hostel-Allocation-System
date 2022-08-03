const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    RollNo: {
        type: String,
        unique:false
    },
    html: {
        type: String
    }
})

const Register = new mongoose.model("Allocations",employeeSchema);
module.exports=Register;