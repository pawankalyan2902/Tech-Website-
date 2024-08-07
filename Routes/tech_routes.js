const express=require("express");

//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
const router=express.Router();

//to generate unique ids
const uuid = require("uuid");


//importing files
const data_operations=require("../utility/tech_data");

//browse page
router.get("/browse", function (req, res) {
    const exsisting_users = data_operations.read_and_parsed_data();
    const order=req.query.order;
    if(order=="asc")
    {
        exsisting_users.sort(function(tech_a,tech_b){
            if(tech_a.name>tech_b.name)
            {
             return 1;
            }
            else{
             return -1;
            }
         });
    }



    res.render("browse", { number_of_tech: exsisting_users.length, tech_users: exsisting_users });

});
//dynamic routes
router.get("/browse/:id", function (req, res) {
    const tech_id = req.params.id;
    const parsed_file = data_operations.read_and_parsed_data();
    for (let tech of parsed_file) {
        if (tech_id == tech.id) {

            return res.render("view_tech", { tech: tech });
        }

    }
    res.status(404).render("404");
});
//forms
router.post("/forms", function (req, res) {
    const data = req.body;
    data.id = uuid.v4();//it is used to generate unique id's for each object
    const exsisting_users = data_operations.read_and_parsed_data()
    exsisting_users.push(data);
    data_operations.write_data(exsisting_users);
    res.redirect("/sucess")
});
//redirected route
router.get("/sucess", function (req, res) {
    res.render("sucess");
});

module.exports=router;