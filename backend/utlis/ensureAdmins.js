import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/adminSchema.js";

dotenv.config();

// admins are stored in database and should be removed seprately from database by me(rituraj kalita).
const adminsToEnsure = [
  { username: "kalitarituraj", password: "kalita@123" },
  { username: "admin2", password: "Admin@456" },
  { username: "admin3", password: "Admin@789" },
];

export async function ensureAdmins() {
  try {
    // monogo connection if not connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    }

    for (const adminData of adminsToEnsure) {
      const existingAdmin = await Admin.findOne({ username: adminData.username });
      if (!existingAdmin) {
        await Admin.create(adminData); 
        console.log(`Created admin: ${adminData.username}`);
      } else {
        console.log(`${adminData.username} already exists.`);
      }
    }
    console.log("Admin check complete.");
  } catch (error) {
    console.error("Error ensuring admins:", error);
  } finally {
    // Close only if script is run directly (not imported)
    if (import.meta.url === `file://${process.argv[1]}`) {
      await mongoose.connection.close();
      console.log("MongoDB connection closed (standalone mode).");
    }
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  ensureAdmins();
}
