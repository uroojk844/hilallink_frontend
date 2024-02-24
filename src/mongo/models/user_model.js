import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
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
