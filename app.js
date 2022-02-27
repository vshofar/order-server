
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.listen(port, () => {
 console.log("Server running on port "+ port);
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