import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb connected successfully")
    } catch (error) {
        console.error("Error in connecting MongoDb")
    }
}
export default connectDb;