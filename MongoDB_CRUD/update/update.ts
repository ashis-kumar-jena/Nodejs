import * as express from  "express";
import * as mongodb from "mongodb";

let ashokIT:any =mongodb.MongoClient;
let update:any =express.Router().put("/",(req:any,res:any):any=>{
    ashokIT.connect("mongodb+srv://kumarjenaashis54:grziSusiIQVprwrl@cluster3.itadk.mongodb.net/ashokit_nodejs?retryWrites=true w=majority&appName=Cluster3",(err:any,connection:any)=>{
           if(err) throw err;
           else{
            let db =connection.db("ashokit_nodejs");
            db.collection("products").updateOne({id:req.body.id},{$set:{price:req.body.price,quantity:req.body.
               quantity}},
               (err:any,result:any)=>{
                if(err) throw err;
                else{
                    res.send({message:"record updated successfully !!!"});
                }
               });
           }
    })
})
export default update;