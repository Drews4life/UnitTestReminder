console.log("-----------running the server itself--------")
const express = require("express");

var app = express();

var port = process.env.PORT || 3000;

app.get("/", (req,res) => {

    res.status(404).send({
        error: "Page not found.",
        name: "TODO app v1"
    });

});

app.get("/users", (req, res) => {
  
    res.send([
        {
            name: "Andrew",
            age: "19"
        },
        {
            name: "Sam",
            age: "21"
        }
    ]);


});



app.listen(port); 



module.exports.app = app;
