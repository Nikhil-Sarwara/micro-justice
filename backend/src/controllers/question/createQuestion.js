import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createQuestion = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!title || !description || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const question = await prisma.question.create({
      data: {
        title,
        description,
        category,
        userId,
      },
    });

    res.status(201).json({ message: "Question created", question });
  } catch (error) {
    console.error("Error creating question:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
