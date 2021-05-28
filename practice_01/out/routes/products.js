"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "microphone" }
];
router.get('/products', function (req, res) {
    res.json(products);
});
router.post('/products', function (req, res) {
    console.log(req.body);
    res.send(req.body);
});
module.exports = router;
