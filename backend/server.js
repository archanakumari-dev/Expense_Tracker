import express from 'express';
import dotenv from "dotenv";
import userRoute from './routes/userRoute.js';
import cors from 'cors';
import connect from './config/connectionDB.js';
import transactionRoute from './routes/transactionRoute.js';
const app=express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));dotenv.config();

const PORT=process.env.PORT

connect();
//user login register route
app.use('/users',userRoute)

//trasaction route
app.use('/transaction',transactionRoute)

app.listen(PORT,()=>{
    console.log("server is listening on port",PORT)
})