import express from "express";
import bodyParser from 'body-parser'
import router from "./routes/userRoute.js"
import dbConnection from "./config/dbConnect.js";
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(bodyParser.json())
const PORT = 5000;

// app.get('/', routes)
app.use('/api/v1/user/', router)
// app.use('api/v1/user', userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is Running PORT ${PORT}`);
    dbConnection();
})