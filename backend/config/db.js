import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: ".env"});

const databaseconnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Mongo");
    }
    catch(error){
        console.error("Mongo connection error:", error.message);
    }
}
export default databaseconnection;