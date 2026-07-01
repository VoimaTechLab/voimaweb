import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./config/env.js";
import { errorHandler, notFoundHandler } from "./middleware/error.js";
import { apiLimiter } from "./middleware/rateLimit.js";
import routes from "./routes/index.js";

const app = express();

app.set("trust proxy", 1);

app.use(helmet());
app.use(compression());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan(env.isProd ? "combined" : "dev"));

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://voimainitiative.com",
  "https://www.voimainitiative.com",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
  })
);

app.use(env.apiPrefix, apiLimiter, routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;   