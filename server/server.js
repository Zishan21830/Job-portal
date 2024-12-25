import express from "express";
import home from "./routes/userRoute.js";
import jobsRouter from "./routes/jobsRoute.js"
import dbConnection from "./config/dbConnect.js";
const app = express();

const PORT = 500;

app.get('/', home)
app.use("/api/v1/jobs", jobsRouter);

app.listen(PORT, ()=>{
    console.log(`Server is Running PORT ${PORT}`);
    dbConnection();
})