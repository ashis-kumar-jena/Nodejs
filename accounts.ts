import * as express from "express";

let accounts = express.Router();

accounts.get("/", (req: express.Request, res: express.Response): void => {
    res.status(200).json({ message: "Welcome to accounts module" });
});

accounts.post("/", (req: express.Request, res: express.Response): void => {  // Use .post here
    res.status(200).json({ message: "Account will add soon" });
});

export default accounts;
