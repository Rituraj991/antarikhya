import express from "express";
import Member from "../models/memberSchema.js";

const router = express.Router();


router.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await Member.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const newMember = new Member({ name, username, email, password });
    await newMember.save();

    return res
      .status(201)
      .json({ message: `Member ${name} created successfully!` });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});


router.get("/member/dashboard", (req, res) => {
  res.status(200).json({ message: `Welcome to Member Dashboard` });
});

export default router;
