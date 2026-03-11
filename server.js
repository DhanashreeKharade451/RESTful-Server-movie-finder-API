import { configDotenv } from "dotenv";

import express from 'express'

//Set up your Express application instance.
const app = express()


 //server should listen on a port
const port =3001
app.listen(port,(req,res) => {
    console.log("Port is listening at" +port)
})