import mongoose from "mongoose";
import "dotenv/config"; 

export const dbconnect = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MONGO_URI"+process.env.MONGO_URI))

};
