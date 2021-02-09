"use strict";
exports.__esModule = true;
var Products = /** @class */ (function () {
    function Products(products) {
        var _this = this;
        this.products = [];
        this.getAllProducts = function () { return _this.products; };
        this.getProductById = function (id) { return _this.products.find(function (p) { return p.id === id; }); };
        this.addProduct = function (product) { return _this.products.push(product); };
        this.deleteProductById = function (id) {
            var oldProduct = _this.getProductById(id);
            var newProducts = _this.products.filter(function (p) { return p.id !== id; });
            _this.products = newProducts;
            return oldProduct;
        };
        this.updateProduct = function (product) {
            _this.deleteProductById(product.id);
            _this.addProduct(product);
        };
        this.products = products;
    }
    return Products;
}());
exports["default"] = Products;
