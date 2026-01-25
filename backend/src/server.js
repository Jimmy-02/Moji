import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './libs/db.js';
import authRoute from './routes/authRoute.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use('/api/auth', authRoute);

connectDB().then(() =>{
    app.listen(PORT, () =>{
        console.log(`Server start: ${PORT}`);
    });
});