"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
});
app.listen(8081, function () {
    console.log("server started");
});
