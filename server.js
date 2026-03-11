import { configDotenv } from "dotenv";
import { movieRoutes } from "./routes/movieRoutes";

import express from 'express'

//Set up your Express application instance.
const app = express()
app.use(express.json());

app.use("./api", movieRoutes);


 //server should listen on a port
const port =3001
app.listen(port,() => {
    console.log("Port is listening at" +port)
})