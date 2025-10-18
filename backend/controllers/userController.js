import Member from "../models/memberSchema.js";
import bcrypt from "bcryptjs"; 
import Admin from "../models/adminSchema.js";

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Admin login 
    const admin = await Admin.findOne({ username });
    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (isMatch) {
        return res.status(200).json({
          message: "Admin logged in successfully",
          success: true,
          dashboard: "admin",
        });
      } else {
        return res.status(401).json({
          message: "Invalid admin credentials",
          success: false,
        });
      }
    }

    // Member login
    const member = await Member.findOne({ username });
    if (!member) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }

    const isMemberMatch = await bcrypt.compare(password, member.password);
    if (!isMemberMatch) {
      return res.status(401).json({
        message: "Incorrect password",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Member logged in successfully",
      success: true,
      dashboard: "member",
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server Error", success: false });
  }
};
