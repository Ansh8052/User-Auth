import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connection succesfully')
}).catch((err)=>{
    console.log(err);
});

const app = express();
app.use(express.json());

app.listen(3000, () =>{
    console.log('Server is running');
})

app.use('/api/auth', authRouter);
