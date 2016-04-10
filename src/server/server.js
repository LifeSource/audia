var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

var app = express();
var config = require("./config")();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(config.client));
app.use(express.static(config.root));
app.use("/*", express.static(config.index));

app.listen(config.port);
