//forming the server
const express = require("express");
const app = express();

// file system management
let path = require("path");
let fs = require("fs");

//All files
const view = path.join(__dirname, "views");

//ejs
app.set("view engine", "ejs");
app.set("views", view);




//middleware
//used to parse "req.body"
app.use(express.urlencoded({ extended: false }));
//used to parse the static files
app.use(express.static("public/styles"));
app.use(express.static("public/scripts"));



//Spliting router to diffrent files

//step:1 Importing the files
const Default_routes=require("./Routes/Default_routes");
const tech_routes=require("./Routes/tech_routes");

//step:2 custom middleware
app.use("/",Default_routes);
app.use("/",tech_routes);

//custom middleware for error 404
app.use(function(req,res){
    res.status(404).render("404");

});
//error 500
app.use(function(error,req,res,next){
    res.status(500).render("500");
})
app.listen(3000);