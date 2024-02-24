import mongoose from "mongoose";
mongoose.set("debug", true);
const userSchema = mongoose.Schema(
  {
    name: String,
    username: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: String,
    phone: {
      type: String,
      unique: true,
  
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    profile_url: String,
    cover_url: String,
    category: String,
    dob: Date,
    website: String,
    location: String,
    bio: String,
    joining_date: {
      type: Date,
      default: Date.now(),
    },
    visibility: String,
    isPremium: Boolean,
  },
  { timestamps: true }
);

export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);
