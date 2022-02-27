
var express = require("express");
var app = express();

app.listen(5000, () => {
 console.log("Server running on port 5000");
});

app.get("/goodburger", (req, res, next) => {
    res.json([
        {"name":"podrao burger"},
        {"name":"special burger"},
        {"name":"artesanal burger"},
        {"name":"vegan burger"},
    ]);
});

app.get("/mypizza", (req, res, next) => {
    res.json([
        {"name":"napolitana"},
        {"name":"portuguesa"},
        {"name":"vegan"},
        {"name":"4 queijos"},
    ]);
});