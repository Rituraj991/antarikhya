import express from "express";
import { Login } from "../controllers/userController.js";
import { createNewMember } from "../controllers/newMemberController.js";

const router = express.Router();

// Member signup
router.post("/signup", createNewMember);

// Login (admin or member)
router.post("/login", Login);

export default router;
