import express from 'express';
import dotenv from  'dotenv';
import morgan from 'morgan';
import processRoutes from './routes/processRoutes.js'







// configure env
dotenv.config();



// database config 


//rest boject
const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'))

// routes
app.use('/api',processRoutes);

//rest api 






const PORT = process.env.PORT||8000;
app.listen(PORT,(req,res)=>{
    console.log(`server Running on ${process.env.DEV_MODE} mode on port ${process.env.PORT}`)
})