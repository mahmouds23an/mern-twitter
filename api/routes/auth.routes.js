import express from "express";
const router = express.Router();

import { signup } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";

// http://localhost:8000/api/auth/......
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
