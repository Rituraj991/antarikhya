import express from "express";
import Member from "../models/memberSchema.js";
import bcryptjs from "bcryptjs";

const router = express.Router();


router.post("/signup", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

   
    const existingMember = await Member.findOne({
      $or: [{ username }, { email }],
    });
    if (existingMember) {
      return res.status(400).json({ message: "Username or email already exists." });
    }

    
    const hashedPassword = await bcryptjs.hash(password, 12);

    const newMember = new Member({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await newMember.save();

    res.status(201).json(newMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/", async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });

    await member.deleteOne();
    res.status(200).json({ success: true, message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id/promote", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });

    member.role = "core";
    await member.save();

    res.status(200).json(member); 
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
