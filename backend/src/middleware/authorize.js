import { ApiError } from "../utils/ApiError.js";
import { can } from "../utils/permissions.js";

// Usage: authorize("messages")  or  authorize("admins")
export const authorize = (resource) => (req, _res, next) => {
  if (!req.user) return next(ApiError.unauthorized());
  if (!can(req.user.role, resource))
    return next(ApiError.forbidden("You do not have access to this resource"));
  next();
};