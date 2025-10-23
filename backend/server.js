import express from "express";
import dotenv from "dotenv";
import databaseconnection from "./config/db.js";  
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { ensureAdmins } from "./utlis/ensureAdmins.js";
import messageRoutes from "./routes/messageRoutes.js";
import serverless from "serverless-http"; 

dotenv.config({ path: ".env" });


databaseconnection();
ensureAdmins();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:8000",            
      "https://antarikhyajec-pied.vercel.app/"  
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/member", memberRoutes);
app.use("/api/message", messageRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Antarikhya API is running...");
});


app.use(errorHandler);

export const handler = serverless(app);
