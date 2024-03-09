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
      type: String,
      unique: true,
    },
    profile_url: {
      type: String,
      default: "",
    },
    cover_url: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    dob: {
      type: Date,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
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
      default: false,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    password: {
      type: String,
      required: true,
    },
    blocked: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const userModel =
  mongoose.models.users || mongoose.model("users", userSchema);
