import { config } from "@/config/env.js";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import dbConnect from "@/config/db-connect.js";
import errorHandler from "@/middlewares/error-handler.middleware.js";
import v1Routes from "@/routes/index.js";

//@note: Configurations

const app = express();
const port = config.PORT;
const connStr = config.MONGODB_URI;

//@note: Middlewares

app.use(express.json());
app.use(cors());
app.use(helmet());

//@note: Logging
app.use(morgan("dev"));

//@note: Routes
app.get("/api/v1/health", (_req, res) =>
  res.status(200).json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
  }),
);
app.use("/api/v1", v1Routes);

//@note: Global Error Handler
app.use(errorHandler);

app.listen(port, async () => {
  try {
    await dbConnect(connStr);
    console.log(`
    📦 Server started successfully!
    📡 Environment: ${config.NODE_ENV || "development"}
    🔌 Port: ${config.PORT}
    
    📍 Access URLs:
      ➜  Network:  http://127.0.0.1:${config.PORT}
      📖 API Documentation: http://127.0.0.1:${config.PORT}/api/v1/docs
  `);
  } catch (error: unknown) {
    //@note: 500FTSS an error code for Failed to start server!
    console.error("[500FTSS]", error);
    process.exit(1);
  }
});
