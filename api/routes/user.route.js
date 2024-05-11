import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

import {
  getUserProfile,
  getSuggestedUser,
  getSuggestedUserPage,
  followUnFollowUser,
  updateUser,
} from "../controllers/user.controller.js";

// http://localhost:5000/api/users/......
router.get("/profile/:username", protectRoute, getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUser);
router.get("/suggestedPage", protectRoute, getSuggestedUserPage);
router.post("/follow/:id", protectRoute, followUnFollowUser);
router.post("/update", protectRoute, updateUser);

export default router;
