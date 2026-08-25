import { config } from "@/config/env.js";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import dbConnect from "@/config/db-connect.js";
import errorHandler from "@/middlewares/error-handler.middleware.js";

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

//@note: Global Error Handler
app.use(errorHandler);

app.listen(port, async () => {
  await dbConnect(connStr);
  console.log("Server running");
});
