import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        Name: {
            type: String, 
            required: true},
        description: {
            type: String, 
            required: true},
        startDate: Date,
        endDate: Date,
        isActive: {
            type: Boolean, 
            default: true},
        createdAt : {
            type: Date, 
            default: Date.now}
    }
)
export default mongoose.model("Events", eventSchema );