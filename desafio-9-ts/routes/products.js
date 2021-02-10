"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var express = require("express");
var Products_1 = require("../classes/Products");
var router = express.Router();
var products = new Products_1["default"]([
    { id: "1", title: 'Smart TV 50" 4K UHD Hitachi 504KS20', price: 49999, thumbnail: 'https://images.fravega.com/s500/7107f179c6e702457e149e94f6fc45da.jpg', categoryId: 'televisores' },
    { id: "2", title: 'Smart TV 4K 50" Admiral AD50Q20', price: 47999, thumbnail: 'https://images.fravega.com/s500/2d277ff6b1ddbd8c14092c6b199c2ca4.jpg', categoryId: 'televisores' },
    { id: "3", title: 'Smart TV 4K UHD Samsung 50" UN50TU7000', price: 63999, thumbnail: 'https://images.fravega.com/s500/662a2b266e34e0563fee25602609a235.jpg', categoryId: 'televisores' },
    { id: "4", title: 'Celular Libre Samsung Galaxy Note20 Gris', price: 89999, thumbnail: 'https://images.fravega.com/s500/4dfa8c180066ac9debe722bf0ae1795c.jpg', categoryId: 'celulares' },
    { id: "5", title: 'Celular Libre Samsung Galaxy S20FE Lavanda', price: 79999, thumbnail: 'https://images.fravega.com/s500/46e47f3f4ca8e2abca5628d7fde4d569.jpg', categoryId: 'celulares' },
    { id: "6", title: 'Celular Libre Samsung Galaxy Note 20 Ultra Bronce', price: 145999, thumbnail: 'https://images.fravega.com/s500/7ebc2ea1b0d73950855a447acb96adf0.jpg', categoryId: 'celulares' }
]);
router.get('/', function (req, res) {
    console.log('request recibido');
    res.sendFile('C:/Users/porto/Documents/coderhouse-backend/desafio-9-ts/public/index.html');
});
router.get('/products', function (req, res) {
    console.log('request recibido');
    res.json(products.getAllProducts());
});
router.put('/products/update/:id', function (req, res) {
    console.log('request recibido');
    var id = req.params.id;
    var product = __assign({ id: id }, req.body);
    products.updateProduct(product);
});
router["delete"]('/products/delete/:id', function (req, res) {
    console.log('request recibido');
    var id = req.params.id;
    var oldProduct = products.deleteProductById(id);
    res.json(oldProduct);
});
router.post('/products/add', function (req, res) {
    console.log('request recibido');
    var _a = req.body, title = _a.title, price = _a.price, thumbnail = _a.thumbnail, categoryId = _a.categoryId;
    var newProduct = { id: (products.getAllProducts().length + 1).toString(), title: title, price: price, thumbnail: thumbnail, categoryId: categoryId };
    products.addProduct(newProduct);
    res.json({ msg: 'Se agregó el producto', newProduct: newProduct });
});
exports["default"] = router;
