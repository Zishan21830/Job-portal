import express from "express";
import bodyParser from 'body-parser'
import userRouter from "./routes/userRoute.js"
import jobsRouter from "./routes/jobsRoute.js"
import dbConnection from "./config/dbConnect.js";

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(bodyParser.json())
const PORT = 5000;

app.use('/api/v1/user/', userRouter)
app.use("/api/v1/jobs/", jobsRouter);

app.listen(PORT, ()=>{
    console.log(`Server is Running PORT ${PORT}`);
    dbConnection();
})