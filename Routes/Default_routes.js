const express=require("express");
//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();




//consits pages which have no internal operations except  rendering of file
//home page
router.get("/", function (req, res) {
    res.render("tech_home");
}
);
//about page
router.get("/about", function (req, res) {
    res.render("about");

});
router.get("/share", function (req, res) {
    res.render("share");
});


module.exports=router;