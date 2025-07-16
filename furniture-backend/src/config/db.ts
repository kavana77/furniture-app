import mongoose from 'mongoose'
import env from "../utils/validateEnv"

const mongoUri = env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log("Connected to database")
    } catch (error) {
        console.error("MongoDB connection error", error)
    }
}
export default connectDB
