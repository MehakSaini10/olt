import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://mohammedsharbas32:hwWAC1ITPG7kpSuc@edutrack.1abqkb5.mongodb.net/education_col?retryWrites=true&w=majority")
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error:${error.message}`)
    }
}

export default connectDB