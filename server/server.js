import express from "express";
import home from "./routes/userRoute.js";
import dbConnection from "./config/dbConnect.js";
const app = express();

const PORT = 500;

app.get('/', home)

app.listen(PORT, ()=>{
    console.log(`Server is Running PORT ${PORT}`);
    dbConnection();
})