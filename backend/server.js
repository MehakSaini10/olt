import  express  from "express";
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from  'cookie-parser';
import { errorHandler,notFound } from "./middleware/errorMiddleware.js";
import cors from 'cors'
import connectDB from "./config/db.js";
const port=process.env.port||5000
import studentRoutes from './routes/studentRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

const connect=async ()=>{
    await connectDB()
}
connect()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser())
app.use('/api/student',studentRoutes)
app.use('/api/admin',adminRoutes)
app.use(notFound)
app.use(errorHandler)

const server=app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})

