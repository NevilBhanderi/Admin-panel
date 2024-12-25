const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl")


route.get("/" , ctl.login);

route.get("/register" , ctl.register);
route.post("/sendData" , ctl.senddata);
route.post("/loginData" , ctl.logindata);
route.get("/dashBoard" , ctl.dashBoard);
route.get("/logOut" , ctl.Logout);
route.get("/addAdmin" , ctl.admin);

// route.get("/loginData" , ctl.login);



route.get("/tableData" , ctl.table);
route.post("/addData" , ctl.addData);
route.get("/deleteData" , ctl.delete);
route.get("/editData" , ctl.edit);
route.post("/updateData" , ctl.update);

module.exports = route;