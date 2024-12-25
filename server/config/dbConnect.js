import mongoose from "mongoose";

const dbConnection = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/job-Portal').then(()=>{
        console.log('Connction successfully')
    }).catch((error)=>{
        console.log('error',error);
    })
}

export default dbConnection;