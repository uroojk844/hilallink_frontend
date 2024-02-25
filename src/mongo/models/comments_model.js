import mongoose from "mongoose";
mongoose.set("debug", true);
const commentsSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    content: {
      type: String,
      required: true,
      maxLength: 100,
    },
    replies: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        data: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const commentModel =
  mongoose.model.comments || mongoose.model("comments", commentModel);
