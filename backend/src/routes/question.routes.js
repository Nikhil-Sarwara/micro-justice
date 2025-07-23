import express from "express";
import { createQuestion } from "../controllers/question/createQuestion.js";
import { authenticateJWT } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateJWT, createQuestion);

export default router;
