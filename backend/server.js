import express from "express";
import dotenv from "dotenv";
import databaseconnection from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import  { ensureAdmins } from "./utlis/ensureAdmins.js";
import messageRoutes from "./routes/messageRoutes.js"


dotenv.config({ path: ".env" });

databaseconnection();
ensureAdmins();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:8000", 
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);      
app.use("/api/member", memberRoutes); 
app.use("/api/message", messageRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// middleware for errors
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
