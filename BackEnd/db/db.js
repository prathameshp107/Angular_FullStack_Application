import mongoose from "mongoose";
import{  MongoDB_URL }  from '../config/config.js';


export default function ConnectToMongoDB() {
    mongoose.connect(MongoDB_URL,
    ).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log("Error while connecting to MongoDB: ", error);
    });
}