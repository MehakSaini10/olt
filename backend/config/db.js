import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://mohammedsharbas32:hwWAC1ITPG7kpSuc@edutrack.1abqkb5.mongodb.net/?retryWrites=true&w=majority",{

            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error:${error.message}`)
    }
}

export default connectDB