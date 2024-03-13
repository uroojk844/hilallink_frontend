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
      lowercase: true,
    },
    gender: {
      type: String,
      default: "not specified",
    },
    phone: {
      required: true,
      type: String,
      unique: true,
    },
    profile_url: String,
    cover_url: String,
    category: String,
    dob: Date,
    website: String,
    location: String,
    bio: {
      type: String,
      max: 160,
    },
    joining_date: {
      type: Date,
      default: Date.now(),
    },
    visibility: {
      type: String,
      default: "Public",
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    isPublic:{
      type:Boolean,
      default:true
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    password: {
      type: String,
      required: true,
    },
    blocked: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true }
);

export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);
