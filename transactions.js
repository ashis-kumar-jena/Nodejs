"use strict";
//create the sub module
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "transaction soon...!" });
});
transactions.get("/ashis", function (req, res) {
    res.status(200).json({ message: "welcome to ashis for nodejs" });
});
exports.default = transactions;
