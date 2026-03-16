import dotenv from "dotenv";
import express from 'express';

import router from "./routes/movieRoutes.js";

dotenv.config();

//Set up your Express application instance.
const app = express()
app.use(express.json());

app.use("/api", router);


 //server should listen on a port
const port =3001;
app.listen(port,() => {
    console.log("Port is listening at" +port)
});