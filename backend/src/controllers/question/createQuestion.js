import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createQuestion = async (req, res) => {
  try {
    // 1. Get the userId SECURELY from the middleware, NOT the request body.
    const userId = req.user?.id;

    // 2. Get the rest of the data from the request body.
    const { title, description, category } = req.body;

    // 3. Validate the user's identity first.
    if (!userId) {
      return res
        .status(401)
        .json({ error: "Unauthorized: User not authenticated." });
    }

    // 4. Validate the other required fields.
    if (!title || !description || !category) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // 5. Create the question in the database using the secure userId.
    const question = await prisma.question.create({
      data: {
        title,
        description,
        category,
        userId, // This now comes from a trusted source.
      },
    });

    res
      .status(201)
      .json({ message: "Question created successfully", question });
  } catch (error) {
    console.error("Error creating question:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
};
