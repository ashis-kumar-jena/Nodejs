const express =require("express");
const pug=require("pug");

let app=express();

app.set("view engine","pug");
app.set("views","./views");

app.get("/demo",(req,res)=>{
    res.render("demo");
    })
    app.listen(8081,()=>{
        console.log("server started!!!!")
    });