"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts_1 = require("./accounts");
var Transactions_1 = require("./Transactions");
var card_1 = require("./card");
var app = express();
app.use("/accounts", accounts_1.default);
app.use("/transactions", Transactions_1.default);
app.use("/cards", card_1.default);
app.listen(8081, function () {
    console.log("server started");
});
