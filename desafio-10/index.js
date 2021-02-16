"use strict";
exports.__esModule = true;
var express = require("express");
var products_1 = require("./routes/products");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', products_1["default"]);
app.listen(3000, function () {
    try {
        console.log('Se levantó el servidor');
    }
    catch (error) {
        console.log(error);
    }
});
