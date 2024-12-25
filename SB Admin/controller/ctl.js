const firstadmin = require("../model/firstSchema");
const signAdmin = require("../model/signupSchema");

module.exports.login = (req,res) =>{
    res.render("login");
};

module.exports.register = (req,res) =>{
    res.render("register");
};

module.exports.senddata = async (req,res) =>{
    let reg  = await signAdmin.create(req.body);
    reg && res.render("login");
};

module.exports.logindata = async (req,res) => {
    let admin = await signAdmin.findOne({"email":req.body.email})
    if (!admin) {
        res.redirect("/") 
    }
    if (req.body.pass == admin.pass) {
        res.cookie("adminData",admin)
        res.redirect("/dashBoard")
    }else{
        res.redirect("/")
    }
};

module.exports.Logout = async(req,res)=>{
    res.clearCookie("adminData")
    res.redirect("/")
};

module.exports.dashBoard = async (req,res) =>{
    const admin = req.cookies.adminData
    admin ? res.render("index") : res.redirect("/loginData");
    // res.render("index");
};


module.exports.admin = (req,res) =>{
    const admin = req.cookies.adminData
    admin ? res.render("addAdmin") : res.redirect("/loginData"); 
};

module.exports.table = async (req,res) =>{
    if(req.cookies.adminData){
        const data = await firstadmin.find();
    res.render("tableView" , {data});
    } else{
        res.redirect("/loginData")
    }
};

module.exports.addData = async (req,res) => {    
    const data = firstadmin.create(req.body);
    data && res.redirect("/tableData");
};

module.exports.delete = async (req,res) =>{
    const data = await firstadmin.findByIdAndDelete(req.query.id);
    data && res.redirect("/tableData");
};

module.exports.edit = async (req,res) => {
    if (req.cookies.adminData) {
        const data = await firstadmin.findById(req.query.id);
    data && res.render("edit" , {data});
    } else {
        res.redirect("/loginData")
    }
};

module.exports.update = async (req,res) => {
    const data = await firstadmin.findByIdAndUpdate(req.body.id , req.body);
    data && res.redirect("/tableData");
}