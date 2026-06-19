import { broadcastSchema } from "../validators/broadcast.validator.js";
router.post("/broadcast", requireAuth, authorize("newsletter"), validate(broadcastSchema), c.broadcastNewsletter);