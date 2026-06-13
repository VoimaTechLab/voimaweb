import { env } from "../config/env.js";

export const notFoundHandler = (req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
};

export const errorHandler = (err, _req, res, _next) => {
  let status = err.statusCode || 500;
  let message = err.message || "Internal server error";

  // Prisma unique constraint
  if (err.code === "P2002") {
    status = 409;
    message = `Duplicate value for ${err.meta?.target?.join(", ") || "field"}`;
  }
  if (err.code === "P2025") { status = 404; message = "Record not found"; }

  if (!err.isOperational && status === 500 && env.isProd)
    message = "Something went wrong";

  if (!env.isProd && status === 500) console.error(err);

  res.status(status).json({
    success: false,
    message,
    ...(err.details && { errors: err.details }),
  });
};