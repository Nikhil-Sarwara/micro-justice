import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  console.log("[DEBUG] Auth middleware is running...");

  try {
    const authHeader = req.headers.authorization;
    console.log("[DEBUG] Authorization Header:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("[DEBUG] ERROR: No Bearer token found in header.");
      return res
        .status(401)
        .json({ error: "Unauthorized: No token provided." });
    }

    // Extract the token from "Bearer <token>"
    const token = authHeader.split(" ")[1];
    console.log("[DEBUG] Extracted Token:", token);

    // This is the most important check. Ensure this secret is the same one used for login.
    const secret = process.env.JWT_SECRET;
    console.log("[DEBUG] Using JWT_SECRET:", secret);

    // Verify the token
    const decoded = jwt.verify(token, secret);
    console.log("[DEBUG] Token decoded successfully:", decoded);

    // Attach user data to the request object for the next controller
    req.user = { id: decoded.userId, email: decoded.email };

    next(); // Move to the next function (your createQuestion controller)
  } catch (error) {
    // THIS WILL TELL YOU THE EXACT REASON THE TOKEN IS FAILING
    console.error(
      "[DEBUG] JWT VERIFICATION FAILED:",
      error.name,
      error.message
    );
    return res.status(401).json({ error: "Unauthorized: Invalid token." });
  }
};
