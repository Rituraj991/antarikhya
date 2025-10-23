import Member from "../models/memberSchema.js";
import bcryptjs from "bcryptjs";


export const createNewMember = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const existingUser = await Member.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Username or email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    const newMember = await Member.create({
      name,
      username,
      email,
      password: hashedPassword,
      role: "member", 
    });

    return res.status(201).json({
      message: "New member created successfully",
      success: true,
      member: {
        id: newMember._id,
        name: newMember.name,
        username: newMember.username,
        email: newMember.email,
        role: newMember.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server error, please try again",
      success: false,
    });
  }
};


export const getMembers = async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching members", success: false });
  }
};


export const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    await Member.findByIdAndDelete(id);
    res.status(200).json({ message: "Member deleted successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting member", success: false });
  }
};


export const promoteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await Member.findById(id);
    if (!member) {
      return res.status(404).json({ message: "Member not found", success: false });
    }
    member.role = "core";
    await member.save();

    
    res.status(200).json(member);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error promoting member", success: false });
  }
};


