const express = require("express");
const port = 1818;
const db = require("./config/db");
const path = require("path");
const app = express();
const fs = require("fs");
const cookie = require("cookie-parser");

app.set("view engine" , "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use("/", express.static(path.join(__dirname,"public")));
app.use("/uploads", express.static(path.join(__dirname,"uploads")));

app.use("/" , require("./routes/route"));
app.listen(port , (err)=>{
    err ? console.log(err) : console.log("server strted on port " + port);
});



