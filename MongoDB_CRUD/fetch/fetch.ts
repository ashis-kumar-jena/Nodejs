import express from "express";
import mongodb from "mongodb";

let ashis:any= mongodb.MongoClient;
let fetch:any = express.Router();

fetch.get("/", (req: any, res: any) => {
    ashis.connect("mongodb+srv://kumarjenaashis54:grziSusiIQVprwrl@cluster3.itadk.mongodb.net/ashokit_nodejs?retryWrites=true&w=majority&appName=Cluster3", (err, client) => {
        if (err) throw err;
        else {
            let db = client.db("ashokit_nodejs");
            db.collection("products").find().toArray((err, array) => {
                if (err) throw err;
                else {
                    res.send(array);
                }
                client.close(); // Ensure the connection is closed
            });
        }
    });
});

export default fetch;
