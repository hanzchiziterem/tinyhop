import mongoose from "mongoose";

export default async function dbConnect(
  connStr: string,
): Promise<typeof mongoose> {
  return await mongoose.connect(connStr);
}
