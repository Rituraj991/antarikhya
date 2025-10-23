import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
    {
        firstName: {
            type:String,
            required: true
        },
        lastName: {
            type:String,
            required: true
        },
        email: {
            type:String,
            required: true
        },
        
        phone: {
            type:String,
            required: true
        },
        event:{
            type:mongoose.Schema.Types.ObjectId, ref:"Event"
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)
export default mongoose.model("Registration", registrationSchema);