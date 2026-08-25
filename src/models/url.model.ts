import mongoose, { Schema } from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new Schema(
  {
    originalUrl: { type: String, required: true },
    shortId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(8),
    },
    clickCount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Url = mongoose.model("Url", urlSchema);

export default Url;
