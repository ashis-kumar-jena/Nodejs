import * as express from "express";
import accounts from "./accounts";
import transactions from "./Transactions";
import cards from "./card";

let app:any =express();
app.use("/accounts",accounts);
app.use("/transactions",transactions);s
app.use("/cards",cards);

app.listen(8080,()=>{
    console.log("server started");
});

//  http://localhost:8080/accounts
//  http://localhost:8080/accounts/login

// http://localhost:8080/transactions token,wish

//  http://localhost:8080/cards