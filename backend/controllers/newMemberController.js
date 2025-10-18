import Member from "../models/memberSchema.js";
import bcryptjs from "bcryptjs";

export const createNewMember = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        if (!name || !username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        // if already exists
        const existingUser = await Member.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Username or email already exists",
                success: false
            });
        }

        
        const hashedPassword = await bcryptjs.hash(password, 16);

        // new member
        const newUser = await User.create({
            name,
            username,
            email,
            password: hashedPassword
        });
        
        // success response
        return res.status(201).json({
            message: "New member created successfully",
            success: true,
            user: {
                id: newUser._id,
                name: newUser.name,
                username: newUser.username,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error, please try again",
            success: false
        });
    }
};
