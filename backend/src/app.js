import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import questionRoutes from "./routes/question.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Inside app setup
app.use("/api/questions", questionRoutes);

app.get("/", (req, res) => {
  res.send("Micro Justice Backend is running");
});

export default app;
