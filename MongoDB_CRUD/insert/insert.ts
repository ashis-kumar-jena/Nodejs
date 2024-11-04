import * as express from "express";
import * as mongodb from "mongodb";

let ashokIT = mongodb.MongoClient;
let insert = express.Router().post("/", (req: any, res: any): any => {
    ashokIT.connect(
        "mongodb+srv://kumarjenaashis54:grziSusiIQVprwrl@cluster3.itadk.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority&appName=Cluster3",(err:any, connection:any): any => {
            if (err) throw err;
            else {
                let db = connection.db("ashokit_nodejs");
                db.collection("products").insertOne({
                    "id": req.body.id,
                    "name": req.body.name,
                    "quantity": req.body.quantity,
                    "price": req.body.price,
                    "category": req.body.category
                }, (err: any, result: any) => {
                    if (err) throw err;
                    else {
                        res.send({ message: "Record inserted successfully!" });
                    }
                });
            }
        }
    );
});

export default insert;
