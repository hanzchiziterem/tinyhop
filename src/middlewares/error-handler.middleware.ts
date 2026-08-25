import type { Request, Response, NextFunction } from "express";
import AppError from "@/config/app-error.js";

export default function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ success: false, message: error.message });
  }

  //@note: Developer Debug
  console.error(`[Server Error] `, error);

  return res
    .status(500)
    .json({ success: false, message: "Internal server error!" });
}
