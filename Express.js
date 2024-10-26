"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
var app = express();
//app object used to develop the rest services
//Ex. GET,POST,PUT,,DELETE,.....
//GET Request
app.get("/ashokit", function (req, res) {
    res.status(200).json({ "message": "welcome to typescript with nodejs" });
});
//assign the port no
app.listen(8081, function () {
    console.log("server started successfully !!!");
});
