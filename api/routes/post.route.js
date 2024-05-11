import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

import {
  createPost,
  likeUnLikePost,
  commentOnPost,
  likeUnLikeComment,
  deletePost,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} from "../controllers/post.controller.js";

// http://localhost:5000/api/posts/......
router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnLikePost);
router.post("/comment/:id", protectRoute, commentOnPost);
router.post("/like/:postId/comment/:commentId", protectRoute, likeUnLikeComment);
router.delete("/:id", protectRoute, deletePost);
router.get("/all", protectRoute, getAllPosts);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/user/:username", protectRoute, getUserPosts);

export default router;
