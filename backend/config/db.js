import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${process.env.MONGODB_URI}`);
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}