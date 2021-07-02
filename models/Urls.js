import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema(
  {
    origUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Url", UrlSchema);
