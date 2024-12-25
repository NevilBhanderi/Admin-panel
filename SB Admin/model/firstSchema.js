const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    fname: {
        type:String,
        required: true,
    },
    lname: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    city:{
        type:String,
        required:true,
    }
});

const admin = mongoose.model("second",adminSchema);

module.exports = admin;