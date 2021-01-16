"use strict";
exports.__esModule = true;
var Numbers = /** @class */ (function () {
    function Numbers(n1, n2) {
        var _this = this;
        this.getNumbers = function () { return [_this.n1, _this.n2]; };
        this.n1 = n1;
        this.n2 = n2;
    }
    return Numbers;
}());
exports["default"] = Numbers;
