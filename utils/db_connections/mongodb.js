import mongoose from "mongoose";

console.log("Starting connection");

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Database connected");
    } catch (error) {
        console.error("Database connection failed:", error);
        throw error;
    }
};

