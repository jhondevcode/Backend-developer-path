"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
// settings
app.use(morgan('dev'));
app.use(express.json());
app.set('port', process.env.PORT || 3000); // configuracion del puerto
// routes
app.use(require('./routes/products'));
// static files
app.use(express.static(path.join(__dirname, "public"))); // cargando las archivos estaticos
app.listen(app.get('port'), function () {
    console.log("App running on port " + app.get('port'));
});
