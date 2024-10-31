import * as express from "express";
import * as mongodb from "mongodb";
let ashokIT:any =mongodb.MongoClient;

let remove:any =express.Router().delete("/",(req:any,res:any):any=>{
    ashokIT.connect("mongodb+srv://kumarjenaashis54:grziSusiIQVprwrl@cluster3.itadk.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority&appName=Cluster3",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db=connection.db("ashokit_nodejs");
            db.collection("products").deleteOne({"id":req.body.id},(err,res)=>{
                if(err) throw err;
                else{
                    res.status(200).json({message:`${req.body.id} record deleted successfully!!!!`});
                }
            })
        }
    })
}) 
export default remove;