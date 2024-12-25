const mongoose = require("mongoose");

const signSchema = new mongoose.Schema({
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
    pass:{
        type:String,
        required:true,
    }
   
});

const signAdmin = mongoose.model("sbadmin",signSchema);

module.exports = signAdmin;