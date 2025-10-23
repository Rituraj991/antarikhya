import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Admin dashboard
router.get("/admin/dashboard", authMiddleware, adminMiddleware, (req, res) => {
    res.status(200).json({ message: "Welcome to Admin Dashboard" });
});

export default router;
