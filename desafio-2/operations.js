"use strict";
exports.__esModule = true;
var ops = {
    operation: function (n1, n2, op) {
        switch (op.toUpperCase()) {
            case 'SUMA': return n1 + n2;
            case 'RESTA': return n1 - n2;
            default: break;
        }
    }
};
exports["default"] = ops;
