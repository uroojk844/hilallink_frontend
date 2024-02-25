import { ObjectId, Timestamp } from "mongodb";
import mongoose from "mongoose";
mongoose.set("debug", true)

const notificationSchema = mongoose.Schema({
    time: {
        type: Timestamp
    },
    user: {
        type: ObjectId,
        ref:"users"
    },
    action: {
        type:String
    }
})

export const notificationModel = mongoose.model.notifications || mongoose.model("notifications",notificationSchema)
