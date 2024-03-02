import { ObjectId, Timestamp } from "mongodb";
import mongoose from "mongoose";
mongoose.set("debug", true);

const requestsSchema = mongoose.Schema({
  time: {
    type: Timestamp,
  },
  user: {
    type: ObjectId,
    ref: "users",
  }
});

export const requestsModel =
  mongoose.model.requests ||
  mongoose.model("requests", requestsSchema);
