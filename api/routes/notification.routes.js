import express from "express";
const router = express.Router();

import {
  getNotifications,
  deleteNotifications,
  deleteOneNotification,
} from "../controllers/notification.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

// http://localhost:5000/api/notifications/......
router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
router.delete("/:id", protectRoute, deleteOneNotification);

export default router;
