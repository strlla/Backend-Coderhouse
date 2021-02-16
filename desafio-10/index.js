"use strict";
exports.__esModule = true;
var products_1 = require("./routes/products");
var handlebars = require("express-handlebars");
var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/api', products_1["default"]);
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', './views');
//handlebars
app.engine("hbs", handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts"
}));
app.listen(3003, function () {
    try {
        console.log('Se levantó el servidor');
    }
    catch (error) {
        console.log(error);
    }
});
